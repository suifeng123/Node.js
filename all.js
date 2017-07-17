/**
 * Created by Administrator on 2017/7/17.
 */
//首先加载需要的模块
var http = require('htpp'),  ///web服务器创建模块
    fs   = require('fs'),   //fs文件处理模块
    url = require('url'),   //url字符串处理模块
    querystring = require('querystring'), //字符串处理模块
    httpParam = require('./http_param'),//HTTP参数获取模块
    staticModule = require('./static_module'),// 静态服务器模块
    jade = require('jade'), //jade模板模块
    socket = require('socket.io');//socket模板模块
var BASE_DIR = __dirname,
    filePath =  BASE_DIR+'/test.txt';


//构建整个app
var app = http.createServer(function(req,res){
    /*为http相应对象res新增jade模板解析方法*/
    res.render = function(template,options) {
        var str = fs.readFileSync(template,'utf-8');
        var fn = jade.compile(str,{filename:template,pretty:true});
        var page = fn(options);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(page);
    }
    /*获取用户的url请求路径，并应用decodeURI解析url中的特殊字符和中文*/
    var pathname = decodeURI(url.parse(req.url).pathname);
    /**初始化httpParam模块*/
    httpParam.init(req,res);
    if(pathname=='/favicon.ico'){
        return;
    }

    //进行路由的处理
    switch(pathname){
        case '/': defaultIndex(res);break;
        case '/index':defaultIndex(res);break;
        default: staticModule.getStaticFile(pathname,res,req);
            break;

    }
}).listen(1337);

io = socket.listen(app);

io.sockets.on('connection',function(socket){
    //监听客户端连接
    var message = fs.readFileSync(filePath,'utf-8');
    //监听change_from_server消息
    socket.emit('change_from_server',{msg:message});
    socket.on('success',function(data){
        console.log(data.msg);
    });

    socket.on(
        'data',function(data){
            writeFile(data.msg,function(){
                socket.emit('change_from_server',{msg:data.msg});
            })
        }
    )
});

var socket = io.connect('http://127.0.0.1:1337');

//监听change_from_server消息
socket.on('change_from_server',function(data){
    $('textarea').attr('value',data.msg);
});
//Web浏览器客户端监听键盘事件，当按下键盘时，发送socket data数据
$(document).ready(function(){
    $('textarea').keyup(function(){
        socket.emit('data',{msg:$('textarea').attr('value')});
    })
});

var start = function(res,req){
    var conn = {res:res,req:req};
    var cookies = {};

    if(typeof conn.req.headers.cookie !== 'undefined') {
        //判断是否存在cookie
        conn.req.headers.cookie.split(';').forEach(function(cookie){
            var parts = cookie.split('=');
            cookies[parts[0].trim()] = (parts[1] || '').trim();
        });
    }else{
        cookies.SESSID = 0;
    }

    var SESSID = cookies.SESSID;  //获取当前的sessiond id
    if(typeof  sessions[SESSID] !== 'undefined') {
        //判断是否存在session
        session = sessions[SESSID];
        if(session.expires <Date()){
            //session 过期
            delete sessions[SESSID];
            return newSession(conn.res);
        }else{
            var dt = new Date();
            dt.setMinutes(dt.getMinutes()+30);

            session.expires = dt;
            return sessions[SESSID];
        }
    }else {
        return newSession(conn.res);
    }
};

function newSession(res){
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var SESSID = '';
    for(var i=0;i<40;i++){
        var rnum = Math.floor(Math.random()*chars.length);
        SESSID += chars.substring(rnum,rnum+1);
    }

    if(typeof sessions[SESSID] !== 'undefined'){
        return newSession(res);
    }

    var dt = new Date();

    dt.setMinutes(dt.getMinutes()+30);

    var session = {
        SESSSID:SESSID,
        expires: dt
    };

    sessions[SESSID] = session;

    res.setHeader('Set-Cookie','SESSID='+SESSID);

    return session;
};


function cleanSessions(){
    if(sess in sessions){
        if(sess.expires < Date()){
            delete sessions[sess.SESSID];
        }
    }
};

exports.start = start;