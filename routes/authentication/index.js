import express from 'express'
import passport from 'passport'
import { checkAuthenticated } from '../../utils/passport.js'
import authenticationService from '../../services/authentication.service.js'

const router = express.Router()

// INIT PASSPORT
router.get('/', (req, res, next) => {
  initializePassport(
    passport,
    (Email) => authenticationService.findByEmail(Email),
    (ID) => authenticationService.findById(ID)
  )
  next()
})

router.get('/', checkAuthenticated, (req, res) => {
  if (red.body.Role === 'cbsovhtt') {
  } else if (req.body.Role === 'cbquan') {
    res.render('quan')
  } else if (req.body.Role === 'cbphuong') {
    res.render('phuong')
  } else {
    res.redirect('/register')
  }
})

export default router
