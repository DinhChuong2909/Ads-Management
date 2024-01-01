import express from 'express'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import bcrypt from 'bcryptjs'
import { checkNotAuthenticated } from '../../utils/passport.js'
import authenticationService from '../../services/authentication.service.js'

passport.use(
  new LocalStrategy({ usernameField: 'Email', passwordField: 'Password' }, (Email, Password, cb) => {
    authenticationService.findByEmail(Email).then((user) => {
      if (user == null) {
        return cb(null, false, { message: 'No user with that email' })
      }
      try {
        if (bcrypt.compareSync(Password, user.Hashed_password)) {
          console.log('Login success')
          return cb(null, user)
        } else {
          console.log('Password incorrect')
          return cb(null, false, { message: 'Password incorrect' })
        }
      } catch (e) {
        return cb(e)
      }
    })
  })
)

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, user.ID)
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})

const router = express.Router()

router.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('authentication/signIn')
})

router.post(
  '/login',
  passport.authenticate('local', {
    // successRedirect: '/phuong',
    failureRedirect: '/login-failed',
    failureFlash: true,
  }),
  (req, res) => {
    let redirectPath = '/'
    if (req.user.Role == 'cbquan') {
      redirectPath = `/quan`;
      req.session.userId = req.user.ID;
      console.log(req.session)
    } else if (req.user.Role == 'cbphuong') {
      redirectPath = `/phuong`;
      req.session.userId = req.user.ID;
      console.log(req.session)
    } else if (req.user.Role == 'cbsovhtt') {
      redirectPath = `/so`;
      req.session.userId = req.user.ID;
      console.log(req.session)
    } else {
      redirectPath = '/login-failed';
    }
    res.redirect(redirectPath);
  }
)

router.get('/login-failed', checkNotAuthenticated, (req, res) => {
  res.render('authentication/signInFail')
})

export default router
