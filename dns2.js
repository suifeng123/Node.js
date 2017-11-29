const dns = require('dns');

dns.resolve4('archive.org',(err,address) => {
  if(err) throw err;

  console.log(`IP地址：${JSON.stringify(address)}`);

  address.forEach((a) => {
     dns.reverse(a,(err,hostnames) => {
     if(err){
       throw err;
       }

       console.log(`IP 地址${a} 逆向解析到域名：${JSON.stringify(hostnames)}`);
       });
       });
       });
