const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.set('useCreateIndex', true)

let uploadSchema = new Schema({
  name: {
    type: String,
  },
  mimetype: {
    type: String,
  },
  size: {
    type: Number,
  },
  base64: {
    type: String,
  }
})

module.exports = mongoose.model('Image',uploadSchema)