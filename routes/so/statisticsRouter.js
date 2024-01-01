import express from 'express'
import phuongService from '../../services/phuong.service.js'
import quanService from '../../services/quan.service.js'

import positionService from '../../services/position.service.js'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))

router.get('/so/statistics/select-ward-district', async function (req, res) {
  try {
    const allDistricts = await quanService.findAll()
    const allWards = await phuongService.findAll()

    const nameMap = new Map(allDistricts.map((item) => [item.ID, item.Name]))
    const mergedArray = allWards.map((item) => ({
      ...item,
      DistrictName: nameMap.get(item.ThuocQuan),
    }))

    res.render('so/thongke/wardAndDistrictSelection', {
      layout: 'soPage',
      districtsList: allDistricts,
      wardsList: mergedArray,
    })
  } catch (error) {}
})

router.get('/so/statistics-ward/:ID', async function (req, res) {
  try {
    const wardId = req.params.ID || 0

    const wName = await phuongService.findById(wardId)
    const dName = await quanService.findById(wName.ThuocQuan)
    const data = await positionService.joinReportByPhuongId(wardId)
    const count = data.length

    res.render('so/thongke/statistics', {
      layout: 'soPage',
      empty: data.length === 0,
      list: data,
      wardName: wName,
      districtName: dName,
      count: count,
    })
  } catch (error) {}
})

router.get('/so/statistics-district/:ID', async function (req, res) {
  try {
    const districtId = req.params.ID || 0

    const district = await quanService.findById(districtId)
    const data = await positionService.joinReportByQuanId(districtId)
    const count = data.length

    res.render('so/thongke/statistics', {
      layout: 'soPage',
      empty: data.length === 0,
      list: data,
      district: district,
      count: count,
    })
  } catch (error) {}
})

export default router
