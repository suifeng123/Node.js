/**
 * Created by Administrator on 2017/7/4.
 */
var staticModule = require('./static_module');
http.createServer(function(req,res){
    /*��ȡ��ǰindex.html��·��*/
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/favicon.ico'){
        return
    }else if(pathname=='/index' || pathname==='/'){
        goIndex(res);
    }else{
        staticModule.getStaticFile(pathname,res);
    }
}).listen(1000)