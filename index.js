const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const morgan = require('morgan')
const passport = require('passport')


const eventsRouter = require('./routes/events')
const userRouter = require('./routes/users')
const uploadRouter = require('./routes/uplouds')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to database ', process.env.MONGODB_URI)
  })
  .catch(err => {
    console.log(err)
  })

app.use(cors())
app.use(bodyParser.json())
eventsRouter.use(bodyParser.json())
app.use(morgan('dev'))

app.use(passport.initialize())

app.use('/api/events', eventsRouter)
app.use('/', userRouter)
app.use('/imageUpload', uploadRouter)


app.use(express.static('build'))



app.use(middleware.error)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})