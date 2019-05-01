const mongoose = require('mongoose')
const Schema = mongoose.Schema()
const eventSchema = new Schema({
  name: String,
  description: String,
  short_description: String,
  startAt: String,
  endAt: String,
  imageUrl: String,
  cordinates: Array,
  id: String
})

const Events = mongoose.model('Event', eventSchema)

module.exports = Events