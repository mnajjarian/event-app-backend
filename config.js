require('dotenv').config()
module.exports = {
  'secretKey': process.env.SECRET_KEY,
  'url': process.env.MONGODB_URI
}