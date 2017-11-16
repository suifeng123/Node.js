//使用Cipher和管道流

const crypto = require('crypto');
const fs     = require('fs');
const cipher = crypto.createCipher('aes192','a passwoed');

//创建一个流

const input  = fs.createReadStream('test.js');
const output = fs.createWriteStream('test.enc');

input.pipe(cipher).pipe(output);
