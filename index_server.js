//创建一个服务器端的脚本
//var app = require('http').createServer(handler);

var io = require('socket.io').listen(80);
var http = require('http');

/*进行一定数据对比*/
var flag = true; //是否进行更新的数据的标志

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
     res.setEncoding('utf-8');
     let rawData = "";
     res.on('data', (chunk) => { rawData += chunk; });
     res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);  //打印所需要的数据
    } catch (e) {
      console.error(e.message);
    }
  });
  }).on('error', (e) => {
  console.error(`错误: ${e.message}`);

 });

}

io.on('connection', function (socket) {
  //建立连接,在此处向后台发送的请求
   
   getNews();
  
  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    //在这里去取到前台发过来的数据
     console.log(data);
  });
});