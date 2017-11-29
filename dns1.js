//进行dns的设置
const dns = require('dns');

dns.lookup('iana.org',(err,address,family) => {
    console.log('IP 地址: %j 地址族：IPv%s',address,family);
    });
