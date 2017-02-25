var  http = require('http');
var url = require('url');
var router = require('./modules/router');
//var optfile = require('./modules/file');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=='/favicon.ico'){//清除第二次访问
	      pathname = pathname.replace(/\//,'');
		  console.log(pathname);
		  router[pathname](request,response);
		  /*
		  function recall(data){
		    response.write(data);
			response.end('ok');
		  }//闭包的实现
	   optfile.readfile('./views/login.html',recall);//recall作为回调函数传进去
	  //response.end('ok');//不写则没有http协议尾
	  
	  console.log('主程序执行完毕');
	  */
	}
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001');
