const path = require('path');
const c = require('./node_fs1');

c.getData(path.join(__dirname,'1.txt'),function(err,data){
	console.log(err,data);
})