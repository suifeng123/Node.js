/**
 * Created by Administrator on 2017/6/30.
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');

/*创建HTTP服务器*/
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname,
        paramStr = url.parse(req.url).query,
        param = querystring.parse(paramStr);
     if('/favicon.ico' == pathname){
         //去除浏览器自带的favicon.ico
         return;
     }
    console.log(pathname);
    console.log(paramStr ? paramStr : 'no params');
    console.log(param);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('success');
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337');
