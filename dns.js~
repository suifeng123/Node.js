var http = require('http');
var dns = require('dns');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res) {
	/*写http head 返回html 因此 Content-Type为html */
	res.writeHead(200,{'Content-Type':'text/html'});
	/*获取当前的index.html的路径 */
	var readPath = __dirname + '/'+url.parse('index.html').pathname;
	var indexPage = fs.readFileSync(readPath)
	/**返回我们想要的数据**/
	res.end(indexPage);
}).listen(3000,'127.0.0.1');
