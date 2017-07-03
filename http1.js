/**
 * Created by Administrator on 2017/7/3.
 */
/**http.js**/

var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    BASE_DIR = __dirname; //Node.js中的全局变量，代表全局路径

http.createServer(function(req,res){
    /*获取当前index.html的路径*/
    var pathname = url.parse(req.url).pathname;
    var realPath = __dirname + '/static' + pathname;
    if(pathname == '/favicon.ico') {
        return;
    }else if(pathname == '/index' || pathname == '/'){
        goIndex(res)
    }else {
        dealWithStatic(pathname,realPath,res);
    }
}).listen(1337);

console.log('Server running at http://localhost:1337');