var http = require('http');

//创建一个服务器
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world','utf-8',function(){
		console.log('结束调用了');
	})
}).listen(1337,'127.0.0.1');

console.log('Server running at http://127.0.0.1:1337');
