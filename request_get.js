var request = require('request');

//应用request 方法，获取127.0.0.1:1337
request.get('http://127.0.0.1:1337',function(err,request,result){
	console.log(result);
})