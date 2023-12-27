import express from 'express'

const router = express.Router()

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send('Error logging out')
    }
    res.redirect('/login')
  })
})

export default router
