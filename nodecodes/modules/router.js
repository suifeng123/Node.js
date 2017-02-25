var optfile = require('./modules/file');
module.exports = {
	login:function(req,res){
		function recall(data){
			res.write(data);
			res.end('ok');
		},
			optfile.readfile('./views/login.html',recall);
	},
    zhuce:function(req,res){
		function recall(data){
			res.write(data);
			res.end('ok');
		}
		optfile.readfile('./views/zhuce.html',recall);
	},
		writefile:function(req,res){
                     function recall(data){
			res.write(data);
			res.end('ok');
		}
		optfile.writefile('./views/one.html','hello world',recall);
	}
}