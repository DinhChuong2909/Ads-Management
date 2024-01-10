import express from 'express'
import phuongService from '../../services/phuong.service.js'
import positionService from '../../services/position.service.js'
import reportService from '../../services/report.service.js'
import { formatDateTime } from '../../utils/dateConverter.js'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))

router.get('/quan-select-quantam', async function(req, res) {
  // const isQuan = req.user.Role === 'cbquan'

  if (true) {
    // const idQuan = req.body.ID // or add district in accounts
    const idQuan = 2
    const phuongInQuan = await phuongService.findPhuongThuocQuan(idQuan)

    // render list of Phuong for Can Bo to choose
    res.render('quan/duyetphuong/selectPhuongQuanTam', {
      layout: 'quanPage',
      wardList: phuongInQuan,
    })
  } else {
    res.redirect('/quan') // edit later
  }
})

router.post('/quan-select-quantam', async function(req, res) {
  try {
    const selectedWards = req.body.wards

    let adsInWards = []
    for (const wardID of selectedWards) {
      // should check district and ward instead of ward only
      const eachAds = await positionService.findByPhuong(wardID)
      adsInWards.push(eachAds)
    }

    let reportInWards = []
    for (let ads of adsInWards[0]) {
      const eachReport = await reportService.findByAdsID(ads.Id)
      if (eachReport[0] !== null && eachReport[0] !== undefined) {
        reportInWards.push(eachReport[0])
      }
    }
    const formattedData = reportInWards.map(item => {
      return {
        ...item,
        ThoiGian: formatDateTime(item.ThoiGian),
      }
    })

    res.render('quan/duyetphuong/xuLiPhuongQuanTam', { layout: 'quanPage', reports: formattedData })
  } catch (error) {}
})

router.get('/quan-select-quantam/detail', async function(req, res) {
  const id = req.query.id || 0
  console.log(id)
  const category = await reportService.findById(id)
  console.log(category)

  if (!category) {
    return res.redirect('/quan-select-quantam')
  }

  res.render('phuong/baocao/detail', {
    layout: 'quanPage',
    category: category,
  })
})

export default router
