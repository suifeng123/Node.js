/**
 * Created by Administrator on 2017/7/13.
 */
var BASE_DIR = __dirname;
var fs = require('fs');


fs.exists(BASE_DIR+'/danhuang.txt',function(existBool){
    if(existBool) {
        console.log('danhuang.txt exist');
    }else{
        console.log('danghuang.txt does not exists');
    }
});

fs.unlink(BASE_DIR+'/danhuang.txt',function(err){
    if(err) console.log(err);
})