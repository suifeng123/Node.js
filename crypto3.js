const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','a password');

let encrypted = cipher.update('some clear text data','utf-8','hex');
  console.log(encrypted);
encrypted += cipher.final('hex');

console.log(encrypted);
