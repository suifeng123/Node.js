/**
 * Created by Administrator on 2017/6/30.
 */
var http = require('http');

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
        //���ݽ���
    })
})