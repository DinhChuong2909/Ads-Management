import express from "express";
import positionService from "../../services/position.service.js";
import posPendingService from "../../services/posPending.service.js";
import licenseService from "../../services/LicensingRequest.service.js";
import reportService from "../../services/report.service.js";
import phuongService from "../../services/phuong.service.js";
import quanService from "../../services/quan.service.js";
import { sendOtpEmail } from "../../services/otpEmail.service.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));

// dashboard/Map
router.get('/phuong', async function (req, res) {
  try {
    const list = await positionService.findAll();
    const coordinatesList = list.map(item => [item.Lng, item.Lat]); // Lấy tọa độ từ danh sách dữ liệu

    // Lấy thông tin chi tiết của từng vị trí trong danh sách
    const positionInfoPromises = list.map(item => positionService.findById(item.Id));
    const positionInfo = await Promise.all(positionInfoPromises);

    res.render('phuong/phuongMap', {
      layout: 'phuongPage',
      list: list,
      empty: list.length === 0,
      coordinatesList: JSON.stringify(coordinatesList), // Truyền danh sách tọa độ vào handlebars
      positionInfo: JSON.stringify(positionInfo),
    });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Bang vi tri cac diem
router.get('/phuong/diadiem', async function (req, res) {
  try {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;
    const phuong = 1;

    const total = await positionService.countAll();
    const nPages = Math.ceil(total / limit);
    const pageNumbers = [];
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page
      });
    }

    const list = await positionService.findFromId(limit, offset);

    if (list && list.length > 0) {
      for (let item of list) {
        const phuong = await phuongService.findById(item.Phuong);
        const quan = await quanService.findById(item.KhuVuc);
        item.Phuong = phuong.Name;
        item.KhuVuc = quan.Name;
      }
    }

    res.render('phuong/diadiem/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'phuongPage',
    });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// diadiem/edit?id=6
router.get('/phuong/diadiem/edit', async function (req, res) {
  const id = req.query.id || 0;
  const category = await positionService.findById(id);
  if (!category) {
    return res.redirect('/phuong/diadiem');
  }

  res.render('phuong/diadiem/edit', {
    category: category
  });
})

router.post('/phuong/diadiem/edit/add', async function (req, res) {
  try {
    const { PosID, HinhThucQC, DiaChi, Phuong, KhuVuc, NoiDungChinhSua, HinhAnh } = req.body;
    console.log(req.body)
    // Tạo một object chứa dữ liệu từ form
    const updatePos = {
      PosID,
      HinhThucQC,
      DiaChi,
      Phuong,
      KhuVuc,
      NoiDungChinhSua,
      HinhAnh,
      ThoiGian: new Date() // Thêm thời gian hiện tại khi người dùng submit
    };

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await posPendingService.add(updatePos); // Sử dụng posPendingService thay vì positionService

    res.status(201).send('Dữ liệu đã được ghi vào cơ sở dữ liệu!');
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error);
    res.status(500).send('Đã xảy ra lỗi khi ghi vào cơ sở dữ liệu!');
  }
});

// /phuong/baocao
router.get('/phuong/baocao', async function (req, res) {
  try {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;

    const total = await reportService.countAll();
    const nPages = Math.ceil(total / limit);
    const pageNumbers = [];
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page
      });
    }

    const list = await reportService.findFromId(limit, offset);
    res.render('phuong/baocao/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'phuongPage',
    });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/phuong/baocao/detail', async function (req, res) {
  const id = req.query.id || 0;
  // console.log(id)
  const category = await reportService.findById(id);
  // console.log(category);
  if (!category) {
    return res.redirect('/phuong/baocao');
  }

  res.render('phuong/baocao/detail', {
    layout: 'phuongPage',
    category: category
  });
});

router.post('/phuong/baocao/detail/:id', async function(req, res)
{
  const id = req.params.id || 0;
  console.log(id)
  const xl = "1"
  const ndxl = req.body.NoiDungXuLy;
  
  await reportService.updateXuLyByID(id, xl);
  await reportService.updateNDXuLyByID(id, ndxl);

  const report = await reportService.findById(id)
  sendOtpEmail(report.Email, ndxl);
  
  res.redirect('/phuong/baocao')
});

// /phuong/capphep
router.get('/phuong/capphep', async function (req, res) {
  try {
    const limit = 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;

    const total = await licenseService.countAll();
    const nPages = Math.ceil(total / limit);
    const pageNumbers = [];
    for (let i = 1; i <= nPages; i++) {
      pageNumbers.push({
        value: i,
        isActive: i === +page
      });
    }

    const list = await licenseService.findFromId(limit, offset);

    if (list && list.length > 0) {
      for (let item of list) {
        const phuong = await phuongService.findById(item.Phuong);
        const quan = await quanService.findById(item.KhuVuc);
        item.Phuong = phuong.Name;
        item.KhuVuc = quan.Name;
      }
    }

    res.render('phuong/capphep/list', {
      list: list,
      empty: list.length === 0,
      pageNumbers: pageNumbers,
      layout: 'phuongPage',
    });
  } catch (error) {
    // Xử lý lỗi nếu cần
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/phuong/capphep/edit', async function (req, res) {
  res.render('phuong/capphep/edit', {});
})

router.post('/phuong/capphep/del', async function (req, res) {
  try {
    const id = req.body.ID; // Get the id from the query parameters
    await licenseService.del(id);
    res.redirect('/phuong/capphep');
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error);
  }
})

router.post('/phuong/capphep/edit/add', async function (req, res) {
  try {
    const { PosID, HinhThucQC, DiaChi, Phuong, KhuVuc, NoiDungQC, HinhAnh, Email, NgayBatDau, NgayKetThuc } = req.body;
    console.log(req.body)
    // Tạo một object chứa dữ liệu từ form
    const updatePos = {
      PosID,
      HinhThucQC,
      DiaChi,
      Phuong,
      KhuVuc,
      NoiDungQC,
      HinhAnh,
      Email,
      NgayBatDau,
      NgayKetThuc, // Thêm thời gian hiện tại khi người dùng submit
    };

    // Gọi phương thức từ service để thêm dữ liệu vào cơ sở dữ liệu
    await licenseService.add(updatePos);

    res.status(201).send('Dữ liệu đã được ghi vào cơ sở dữ liệu!');
  } catch (error) {
    console.error('Lỗi khi ghi vào cơ sở dữ liệu:', error);
    res.status(500).send('Đã xảy ra lỗi khi ghi vào cơ sở dữ liệu!');
  }
});

export default router;