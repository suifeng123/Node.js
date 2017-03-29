var net = require('net');
var client = net.connect({port:1204},function(){
	console.log('客户端连接');
	client.write("世界你好");
});
client.on("data",function(data){
	console.log(data.toString());c
	client.end();
});
client.on("end",function(){
	console.log("连接断开");
});
