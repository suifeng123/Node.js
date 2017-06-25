var http = require('http');
var dns = require('dns');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req,res) {
	/*дhttp head ����html ��� Content-TypeΪhtml */
        var pathname = url.parse(req.url).pathname;	
	req.setEncoding("utf-8");
        res.writeHead(200,{'Content-Type':"text/html"});
	/**����������Ҫ������**/
	router(res,req,pathname);//����router����������url·��
}).listen(3000,'127.0.0.1');
//��ӡlog��־
console.log('Server running at http://127.0.0.1:3000/');

function router(res,req,pathname){
	switch(pathname){ //����pathname��ͬ��ִ�в�ͬ�Ĵ����߼�
		case "/parse":
			parseDns(res,req);
		break;
		default:
			goIndex(res,req);
	}
}

function goIndex(res,req){
	//��ȡindex.html���ļ�·��
	var readPath = __dirname+'/'+url.parse('index.html').pathname;
	//ͬ����ȡindex.html�ļ�����Ϣ
	var indexPage = fs.readFileSync(readPath);
	/**����*/
	res.end(indexPage);
}
