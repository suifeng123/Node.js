var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on("message",function(msg,info){
	console.log("sever got:"+msg+"from"+
		info.address+":"+info.port);
});
server.on("listening",function() {
	var address = server.address();
	console.log("�������ڼ���"+address.address+":"+address.port);
});
server.bind(41234);
