import express from 'express'
import phuongService from '../../services/phuong.service.js'
import quanService from '../../services/quan.service.js'

const router = express.Router()
router.use(express.urlencoded({ extended: true }))

router.get('/so/statistics/select-ward-district', async function (req, res) {
  try {
    const allDistricts = await quanService.findAll()
    const allWards = await phuongService.findAll()

    console.log(allDistricts)
    console.log(allWards)

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

router.post('/so/statistics-ward/:ID', async function (req, res) {
  try {
    const wardId = req.params.ID || 0
    const data = await phuongService.findById(wardId)
    console.log(data)
    //render report data of this
  } catch (error) {}
})

router.post('/so/statistics-district/:ID', async function (req, res) {
  try {
    const districtId = req.params.ID || 0
    const data = await quanService.findById(districtId)
    console.log(data)
    //render report data of this id
  } catch (error) {}
})

export default router
