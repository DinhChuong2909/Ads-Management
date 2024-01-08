import express from 'express'
import authenticationService from '../../services/authentication.service.js'
import positionService from '../../services/position.service.js'
import posPendingService from '../../services/posPending.service.js'
import licenseService from '../../services/LicensingRequest.service.js'
import reportService from '../../services/report.service.js'
import phuongService from '../../services/phuong.service.js'
import quanService from '../../services/quan.service.js'
import { sendOtpEmail } from '../../services/otpEmail.service.js'


import multer from 'multer';
import path from 'path';


const router = express.Router()
router.use(express.urlencoded({ extended: true }))

// dashboard/Map
router.get('/quan', async function (req, res) {
  try {
    const userId = req.session.userId
    const user = await authenticationService.findById(userId)
    const userQuan = user.District

    const list = await positionService.findQuan(userQuan)
    const coordinatesList = list.map((item) => [item.Lng, item.Lat]) // Lấy tọa độ từ danh sách dữ liệu

    // Lấy thông tin chi tiết của từng vị trí trong danh sách
    const positionInfoPromises = list.map((item) => positionService.findById(item.Id))
    const positionInfoTemp = await Promise.all(positionInfoPromises)

    // console.log(positionInfo)
    const positionInfo = positionInfoTemp.map((item) => {
      // console.log(item.HinhAnh.replace(/\\/g, '/'))
      const HinhAnhDisplay = item.HinhAnh ? item.HinhAnh.replace(/\\/g, '/') : null

      return {
        ...item,
        HinhAnhDisplay,
      }
    })

    res.render('quan/quanMap', {
      layout: 'quanPage',
      list: list,
      empty: list.length === 0,
      coordinatesList: JSON.stringify(coordinatesList), // Truyền danh sách tọa độ vào handlebars
      positionInfo: JSON.stringify(positionInfo),
    })
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

// Bang vi tri cac diem
router.get('/quan/diadiem', async function (req, res) {
  try {
    const userId = req.session.userId
    const user = await authenticationService.findById(userId)
    const userQuan = user.District

    const limit = 10
    const page = req.query.page || 1
    const offset = (page - 1) * limit

    const total = await positionService.countFromQuan(userQuan)
    const nPages = Math.ceil(total / limit)
    const pageNumbers = []
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page,
      })
    }

    const list = await positionService.findFromQuan(limit, offset, userQuan)

    if (list && list.length > 0) {
      for (let item of list) {
        const phuong = await phuongService.findById(item.Phuong)
        const quan = await quanService.findById(item.KhuVuc)
        item.Phuong = phuong.Name
        item.KhuVuc = quan.Name
      }
    }

    res.render('quan/diadiem/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'quanPage',
    })
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

// diadiem/edit?id=6
router.get('/quan/diadiem/edit', async function (req, res) {
  const id = req.query.id || 0
  const category = await positionService.findById(id)
  if (!category) {
    return res.redirect('/quan/diadiem')
  }

  res.render('quan/diadiem/edit', {
    category: category,
  })
})

// Khởi tạo Multer và cấu hình nơi lưu trữ file tải lên
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Thư mục lưu trữ file tải lên
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

router.post('/quan/diadiem/edit/add', upload.single('form__file'), async function (req, res) {
  try {
    const { PosID, HinhThucQC, DiaChi, Phuong, KhuVuc, NoiDungChinhSua } = req.body
    console.log(req.body)
    // Tạo một object chứa dữ liệu từ form
    const updatePos = {
      PosID,
      HinhThucQC,
      DiaChi,
      Phuong,
      KhuVuc,
      NoiDungChinhSua,
      HinhAnh: req.file ? req.file.path : null,
      ThoiGian: new Date(), // Thêm thời gian hiện tại khi người dùng submit
    }

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await posPendingService.add(updatePos) // Sử dụng posPendingService thay vì positionService

    res.status(201).send('Dữ liệu đã được ghi vào cơ sở dữ liệu!')
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error)
    res.status(500).send('Đã xảy ra lỗi khi ghi vào cơ sở dữ liệu!')
  }
})

// /quan/baocao
router.get('/quan/baocao', async function (req, res) {
  try {
    const userId = req.session.userId
    const user = await authenticationService.findById(userId)
    const userQuan = user.District

    const adsID = await reportService.getAdsID()
    console.log(adsID)
    var reportList = []
    for (let id of adsID) {
      console.log(id)
      var reportID = await positionService.findReportIDQuan(id.AdsID, userQuan)
      if (reportID[0] !== null && reportID[0] !== undefined) {
        var report = await reportService.findByAdsID(reportID[0].Id)
        console.log(report)
        reportList.push(report[0])
      }
    }

    const limit = 10
    const page = req.query.page || 1
    const offset = (page - 1) * limit

    const total = reportList.length
    const nPages = Math.ceil(total / limit)
    const pageNumbers = []
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page,
      })
    }

    const list = reportList.slice(offset, offset + limit)
    
    if (list && list.length > 0) {
      for (let item of list) {
        const reportType = await reportService.findReportType(item.HinhThucReport)
        item.HinhThucReport = reportType.Name
      }
    }

    res.render('quan/baocao/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'quanPage',
    })
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

router.get('/quan/baocao/detail', async function (req, res) {
  const id = req.query.id || 0
  console.log(id)
  const category = await reportService.findById(id)
  console.log(category)
  if (!category) {
    return res.redirect('/quan/baocao')
  }

  res.render('quan/baocao/detail', {
    layout: 'quanPage',
    category: category,
  })
})

router.post('/quan/baocao/detail/:id', async function (req, res) {
  const id = req.params.id || 0
  console.log(id)
  const xl = '1'
  const ndxl = req.body.NoiDungXuLy

  await reportService.updateXuLyByID(id, xl)
  await reportService.updateNDXuLyByID(id, ndxl)

  const report = await reportService.findById(id)
  sendOtpEmail(report.Email, ndxl)

  res.redirect('/quan/baocao')
})
// /quan/capphep
router.get('/quan/capphep', async function (req, res) {
  try {
    const userId = req.session.userId
    const user = await authenticationService.findById(userId)
    const userQuan = user.District

    const limit = 10
    const page = req.query.page || 1
    const offset = (page - 1) * limit

    const total = await licenseService.countQuan(userQuan)
    const nPages = Math.ceil(total / limit)
    const pageNumbers = []
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page,
      })
    }

    const list = await licenseService.findFromQuan(limit, offset, userQuan)

    if (list && list.length > 0) {
      for (let item of list) {
        const phuong = await phuongService.findById(item.Phuong)
        const quan = await quanService.findById(item.KhuVuc)
        item.Phuong = phuong.Name
        item.KhuVuc = quan.Name
      }
    }

    res.render('quan/capphep/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'quanPage',
    })
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

router.get('/quan/capphep/edit', async function (req, res) {
  res.render('quan/capphep/edit', {})
})

router.post('/quan/capphep/del', async function (req, res) {
  try {
    const id = req.body.ID // Get the id from the query parameters
    await licenseService.del(id)
    res.redirect('/quan/capphep')
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error)
  }
})

router.post('/quan/capphep/edit/add', upload.single('form__file'), async function (req, res) {
  try {
    const { PosID, HinhThucQC, DiaChi, Phuong, KhuVuc, NoiDungQC, HinhAnh, Email, NgayBatDau, NgayKetThuc } = req.body
    console.log(req.body)
    // Tạo một object chứa dữ liệu từ form
    const updatePos = {
      PosID,
      HinhThucQC,
      DiaChi,
      Phuong,
      KhuVuc,
      NoiDungQC,
      HinhAnh: req.file ? req.file.path : null,
      Email,
      NgayBatDau,
      NgayKetThuc, // Thêm thời gian hiện tại khi người dùng submit
    }

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await licenseService.add(updatePos)
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error)
  }
})

export default router
