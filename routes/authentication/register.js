import express from 'express'
import bcrypt from 'bcryptjs'
import authenticationService from '../../services/authentication.service.js'
import convertStringToDate from '../../utils/dateConverter.js'
import quanService from '../../services/quan.service.js'
import phuongService from '../../services/phuong.service.js'

const router = express.Router()

router.get('/register', (req, res) => {
  res.render('authentication/register', { layout: 'soPage' })
})

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.Password, 10)

    const user = {
      ID: Date.now().toString().slice(-4),
      Name: req.body.Name,
      Email: req.body.Email,
      Hashed_password: hashedPassword,
      Date_of_birth: convertStringToDate(req.body.DOB),
      Phone: req.body.Phone,
      Role: req.body.Role,
    }

    await authenticationService.add(user)

    // read wards and districts from database
    let locationsList = []
    if (req.body.Role == 'cbquan') {
      locationsList = await quanService.findAll()
    } else if (req.body.Role == 'cbphuong') {
      const wards = await phuongService.findAll()
      const districts = await quanService.findAll()

      const nameMap = new Map(districts.map((item) => [item.ID, item.Name]))
      const mergedList = wards.map((item) => ({
        ...item,
        DistrictName: nameMap.get(item.ThuocQuan),
      }))
      locationsList = mergedList
    } else {
      locationsList = []
    }

    res.render('authentication/registerLocation', {
      layout: 'soPage',
      userID: user.ID,
      locationsList: locationsList,
    })
  } catch (error) {
    res.redirect('/register')
  }
})

router.post('/register-location/:userID', async (req, res) => {
  try {
    const parsedReq = JSON.parse(req.body.selectedLocation)
    const userID = req.params.userID

    if (parsedReq.District) {
      const districtID = parsedReq.District
      await authenticationService.updateDistrict(userID, districtID)
    } else if (parsedReq.Ward) {
      const wardID = parsedReq.Ward
      await authenticationService.updateWard(userID, wardID)
    }

    res.render('so/taotaikhoan/createSuccess')
  } catch (error) {
    res.render('so/taotaikhoan/createFail')
  }
})

export default router
