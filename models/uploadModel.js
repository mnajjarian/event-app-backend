const fs = require('fs')

module.exports.base64_encode = function(file) {
  return new Promise((resolve, reject) => {
    if(file === undefined){
      reject('no file found')
    } else {
      let encodedData = fs.readFileSync(file, 'base64')
      fs.unlink(file)
      resolve(encodedData.toString('base64'))
    }
  })
}