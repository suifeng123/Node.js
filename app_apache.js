const http = require('http');
const url  =  require('url');

const hostname = "127.0.0.1";
const port = 3000;



const server = http.createServer((req,res) => {
	res.statusCode = 200;
	const query = url.parse(req.url,true).query;
	console.log(query);
	res.setHeader('Content-Type','text/plain');
	res.end(`Hello world from ${query['source']}\n`);
});

server.listen(port,hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
})