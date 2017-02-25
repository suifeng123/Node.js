var http = require('http');
var url = require('url');
//ÒıÈërouter
var router = require('./modules/router');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico'){
		var pathname=url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');
		console.log(pathname);
        router[pathname](request,response);
		response.end('');
	}
}).listen(8000);
console.log("server running at http://127.0.0.1:8000/");