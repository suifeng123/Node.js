//创建一个服务器端的脚本
//var app = require('http').createServer(handler);

var io = require('socket.io').listen(80);
var http = require('http');

/*进行一定数据对比*/
var flag = false; //是否进行更新的数据的标志

var globaldata = "";  //用来保存我们的数据有哪些
var origindata = ""; //保存从后端传递过来的数据

function getNews() {
	//获取一个http请求的数据,在后台处理是否要进行更新的操作
	http.get('http://localhost:3003/news',(res) =>{
  	const { statusCode } = res;
    const contentType = res.headers['content-type'];

   let error;
   if (statusCode !== 200) {
    error = new Error('请求失败。\n' +
                      `状态码: ${statusCode}`);
   } else if (!/^application\/json/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                      `期望 application/json 但获取的是 ${contentType}`);
   }
    if (error) {
      console.error(error.message);
      // 消耗响应数据以释放内存
      res.resume();
      return;
    }
     res.setEncoding('utf8');
     let rawData = "";
     res.on('data', (chunk) => { rawData += chunk; });
     res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
       globaldata = JSON.parse(rawData);
       console.log(globaldata);  //打印所需要的数据
    } catch (e) {
      console.error(e.message);
    }
  });
  }).on('error', (e) => {
  console.error(`错误: ${e.message}`);

 });

}
function compareData(origin,newarr){
	var flag = false;
	if(origin.length != newarr.length){
		return {
			flag:true,
			arr:newarr
		}
	}else{
		for(var i = 0; i < origin.length ; i++){
			var temp = false;
			for(var key in origin[i]){
                 if(origin[i][key] != newarr[i].key) {break;temp = true}
			}
			if(temp) return {
				flag: true,
				arr: newarr
			}
		}
		return {
			flag: false,
			arr: origin
		}
	}
}
//设置一个监听器去轮训后台的数据
setInterval(getNews,10000); //十秒钟去轮训一下后台的状态


io.on('connection',  (socket) => {
  
  socket.emit('news',{hello:'world'}); //简历了一个长的连接
  socket.on('my other event',  (data) => {
     console.log(data);
  });
});