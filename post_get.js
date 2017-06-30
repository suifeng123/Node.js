/**
 * Created by Administrator on 2017/6/30.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var postData = '';
    //设置接收数据编码格式为UTF-8
    req.setEncoding('utf-8');
    //接收数据块并将其复制给postData
    req.addListener('data',function(postDataChunk){
        postData = postData + postDataChunk;
    });
    //监听另一个
    req.addListener('end',function(){
        //数据接收数据完毕，执行回调函数
        var param = querystring.parse(postData);
    });

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(1337,'127.0.0.1')