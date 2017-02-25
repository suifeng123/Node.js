var  http = require('http');
//var User = require("./modules/User"); ///就好像是java中的类
var Teacher = require('./modules/Teacher');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
	if(request.url!=='/favicon.ico'){//清除第二次访问
	  //实例化User
        tea = new Teacher(1,"王圣文",27);
		
		tea.enter();
		tea.teach(response);
	  response.end('');
	}
}).listen(8001);

console.log('Server running at http://127.0.0.1:8001');
