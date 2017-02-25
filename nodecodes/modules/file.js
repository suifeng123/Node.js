var fs = require('fs');
module.exports = { //导出为多个函数
	readfile:function(path,recall){//异步执行
	      fs.readFile(path,function(err,data){
			  if(err){
				  console.log(err);
			  }else{
				  console.log(data.toString());
				  recall(data);
			  }
		  });
		  console.log("异步方法执行完毕");
	},
		readfileSync:function(path){
		 var data = fs.readFileSync(path,'utf-8');
		 console.log(data);
		 console.log('同步方法执行完毕');
		 return data;
	},
		writefile:function(path,data,recall){ //异步写文件
	           fs.writeFile(path,data,function(err){  //通过事件回调的方式进行的
				   if(err){
					   throw err;
				   }
				   console.log('It\'s saved!');//文件被保存
				   recall('写文件成功');
			   });
	},
		writeFileSync:function(path,data){
		      fs.writeFileSync(path,data);
			  console.log("同步写文件完成");
	}
}