var net = require('net');

var server = net.createServer(function (socket){
	//新的连接
	socket.on('data',function(data){
		console.log('你好');
	}
	);
	socket.on('end',function(){
		console.log('断开连接');
	});
	socket.write("欢迎光临这个tcp的展示");
});

server.listen(8124,function() {
	console.log("服务器连接");
});
