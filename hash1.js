const crypto = require('crypto');
const hash   = crypto.createHash('sha256');


hash.on('readable',() => {
   const data = hash.read();

   if(data)  console.log(data.toString('hex'));
   });

hash.write('some data to hash');
hash.end();
