var http = require('http');
var dns = require('dns');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res) {
	/*写http head 返回html 因此 Content-Type为html */
        var pathname = url.parse(req.url).pathname;	
	req.setEncoding("utf-8");
        res.writeHead(200,{'Content-Type':"text/html"});
	/**返回我们想要的数据**/
	router(res,req,pathname);//调用router方法来处理url路由
}).listen(3000,'127.0.0.1');
//打印log日志
console.log('Server running at http://127.0.0.1:3000/');

function router(res,req,pathname){
	switch(pathname){ //根据pathname不同，执行不同的处理逻辑
		case "/parse":
			parseDns(res,req);
		break;
		default:
			goIndex(res,req);
	}
}

function goIndex(res,req){
	//获取index.html的文件路径
	var readPath = __dirname+'/'+url.parse('index.html').pathname;
	//同步读取index.html文件的信息
	var indexPage = fs.readFileSync(readPath);
	/**返回*/
	res.end(indexPage);
}
