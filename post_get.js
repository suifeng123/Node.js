/**
 * Created by Administrator on 2017/6/30.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res){
    var postData = '';
    //���ý������ݱ����ʽΪUTF-8
    req.setEncoding('utf-8');
    //�������ݿ鲢���临�Ƹ�postData
    req.addListener('data',function(postDataChunk){
        postData = postData + postDataChunk;
    });
    //������һ��
    req.addListener('end',function(){
        //���ݽ���������ϣ�ִ�лص�����
        var param = querystring.parse(postData);
    });

    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World\n');
}).listen(1337,'127.0.0.1')