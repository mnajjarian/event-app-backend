const bodyParser = require('body-parser')
const uploadRouter = require('express').Router()
const authenticate = require('../authenticate')
const multer = require('multer')
const fs = require('fs')
const Image = require('../models/images')

uploadRouter.use(bodyParser.json())

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const imgFilter = (req, file, cb) => {
  if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error('You can upload only image files!'), false)
  }
  cb(null, true)
}

const upload = multer({ storage: storage, fileFilter: imgFilter })


uploadRouter.post('/', upload.single('myFile'), (req, res) => {
  const img = fs.readFileSync(req.file.path)
  const encode_image = img.toString('base64')

  let model = new Image({
    name: req.file.originalname,
    size: req.file.size,
    mimetype: req.file.mimetype,
    base64: new Buffer.from(encode_image, 'base64')
  })
  console.log(model)
  model.save((err) => {
    if(err) return console.log(err)
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(req.file)
  })
})

module.exports = uploadRouter