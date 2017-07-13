(function(){
   //形成了一个闭包
   var x=y=1;
})()
console.log(x);
console.log(y);

var CACHE_TIME = 60*60*24*365;
if(mimeConf[extname]) {
   var expires = new Date();
   expires.setTime(expires.getTime() + CACHE_TIME * 1000);
   response.setHeader("Expires",expires.toUTCString());
   response.setHeader('Cache-Control','max-age='+CACHE_TIME);
}