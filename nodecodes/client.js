var net = require('net');
var client = net.connect({port:1204},function(){
	console.log('�ͻ�������');
	client.write("�������");
});
client.on("data",function(data){
	console.log(data.toString());c
	client.end();
});
client.on("end",function(){
	console.log("���ӶϿ�");
});
