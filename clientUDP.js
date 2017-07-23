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

//回调地狱
A(a,function(b){
	B(c,function(c){
		C(d,function(e){
			//do some thing
		})
	})
})

var fs = require('fs');
fs.exists('index.txt',function(stats){
	if(stats){
		fs.rename('index.txt','test.txt',function(err){
			fs.unlink('test.txt',function(err){
				if(err) console.log(err);
				else console.log('delete success');
			})
		})
	}
})

mysql = require('mysql');
/*创建mysql连接对象*/
var connection = require('mysql');
//创建mysql连接对象
var connection = mysql.createConnection({
	host: 'example.org',
	user: 'bob',
	password: 'secret'
});

connection.connect(function(err){
	//connected  (unless 'err')
	
});

connection.end(function(err){
  //The connection is terminated now
});

this.error = function(errNum,constroller,logInfo){
	var errType = 'error';
	log(errType,errNum,constroller,logInfo);
}

//for info log
this.info = function(errNum,constroller,logInfo){
	var errType = 'info';
	log(errType,errNum,constroller,logInfo);
}

this.warn = function(errNum,controller,logInfo){
	var errType = 'warn';
	log(errType,errNum,controller,logInfo);
}

this.debug = function(errNum,controller,logInfo){
	var errType = 'debug';
	log(errType,errNum,controller,logInfo);
}

//add log in log file
function log(errType,errorCode,controller,otherInfo){
	var otherInfo = otherInfo ? otherInfo : {};
	//错误日志
	var errorMsg = appLog.getMsg(errorMsg);
	//记录日志的文件名
	var  errorLog = getLogFileName(errType,condtroller);
	log4js.addAppender(lib.log4js.appenders.file(errorLog),loguser);
	var jsonStr = JSON.stringify(otherInfo);
	errorMsg = '[code' + errorCode + ']' +'[msg'+errorMsg + ']'+jsonStr;
	//记录日志
	addLog(errType,errorMsg);
	log4js.clearAppenders();
}
