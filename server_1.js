const http = require('http');

//http的选择

const server = http.server((req,res) => {

    let body = "";

    req.setEncoding('utf-8'); //设置编码方式

    req.on('data',(chunk) => {
          body += chunk;
    });

    req.on('end',() => {
        try {
	   const data = JSON.parse(body);

	   res.write(typeof data);
	   res.end();
	} catch(err){
	  //json解析失败的
	  res.statusCode = 400;
	  return res.end(`error:${err.message}`);
	}
     });
   });

   server.listen(1337);
