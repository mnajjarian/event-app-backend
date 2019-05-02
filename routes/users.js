const bodyParser = require('body-parser')
const userRouter = require('express').Router()
const User = require('../models/user')
const passport = require('passport')
const authenticate = require('../authenticate')

userRouter.use(bodyParser.json())


userRouter.post('/signup', (req, res) => {
  User.register(new User({ username: req.body.username }),
    req.body.password, (err) => {
      if(err) {
        res.statusCode = 500,
        res.setHeader('Content-Type', 'application/json')
        res.json({ err: err })
      }
      else {
        passport.authenticate('local')(req, res, () => {
          const token = authenticate.getToken({ _id: req.user._id })
          res.statusCode = 200,
          res.setHeader('Content-Type', 'application/json')
          res.json({ success: true, token: token, status: 'Registration Successful!' })
        })
      }
    })
})

userRouter.post('/login', passport.authenticate('local'), (req, res) => {

  const token = authenticate.getToken({ _id: req.user._id })
  res.statusCode = 200,
  res.setHeader('Content-Type', 'application/json')
  res.json({ success: true, token: token, status: 'You are Successfully login!' })
})

module.exports = userRouter

