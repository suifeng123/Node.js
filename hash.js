/**
 * Created by Administrator on 2017/7/17.
 */
//获取node.js中原生模块的crypto

var crypto = require('crypto');

//调用crypto模块的hash编码
var hash = crypto.createHash('md5');


//应用hash编码方式实现加密
hash.update(new Buffer('wangshengwen','binary'));
var encode = hash.digest('hex');

console.log(encode);