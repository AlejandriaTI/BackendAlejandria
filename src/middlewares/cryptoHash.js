
const crypto = require('crypto')

function hashSHA256(value) {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

module.exports=hashSHA256