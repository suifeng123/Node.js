var dgram  = require('dgram');
var server = dgram.createSocket('udp4');
//监听message事件
server.on('message',function(msg,rinfo){
	console.log('server get:'+msg + 'from'+rinfo.address+":"+rinfo.port);
});
//监听listening事件
server.on('listening',function(){
	var address = server.address();
	console.log('server listening'+address.address+":"+address.port);
});
server.bind(12343);