var dgram = require('dgram');
//创建udp4 socket对象
var client = dgram.createSocket('udp4');

//创建发送数据的message
var message = new Buffer('hi wangshengwen,node.js is waiting for you');

//发送数据到本地12343端口
client.send(message,0,message.length,12343,'127.0.0.1');
client.close();

module.exports = function(){
	var _res = arguments[0];
	var _req = arguments[1];
	/**
	 * @description  HTTP响应文件上传页面
	 */
	this.uploadPage = function(){
		_res.render(VIEW+'index.jade');
	};
	/*
     * 文件上传处理逻辑	
	 */
	this.uploadAction = function(){};
	/*
	图片压缩处理函数
	 */
	function imageResize(){
        var imageJson = {
        	'width':  width,
        	'height': height,
        	'url':    imagePath,
        	'new_name': newName
        };

        var jsonStr = JSON.stringify(imageJson);// 将json转换为json
        var client = lib.dgram.createSocket('udp4');
        var message = new Buffer(jsonStr);
        //应用UDP客户端发送信息到UDP到服务端
        client.send(message,0,message.length,41234,'127.0.0.1',
        	function(){
        		client.on('message',function(msg,rinfo){
        			var retJson = JSON.parse(msg);
        			if(retJson.code == 0){
        				//成功处理后响应正确信息到web客户端
        				console.log(pathName);
        				_res.render(VIEW + 'main.jade',{
        					'url': pathName,'err':'ok'
        				})
        			}else {
        				_res.render(VIEW + 'main.jade',{
        					'url':'',
        					'err':'error'
        				})
        			}
        		})
        	})
	}

}