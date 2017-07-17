/**
 * Created by Administrator on 2017/7/17.
 */
module.exports = function() {
    this.encode = function() {
        //for nothing
        console.log('no this function exist');
    }

    this.decode = function() {
        //for nothing
        console.log('no this function exist');
    }
};

var util = require('util');
var Target = require('./target');

function Adapter(){
    Target.call(this);
};

util.inherits(Adapter,Target);
module.exports =Adapter;


var observable = function(val){
    var cur = val; //一个内部的变量

    function field(neo){
        if(arguments.length){
            //setter
            if(cur !== neo){
                cur = neo;
            }else{
                //getter
                return cur;
            }
        }

    }
    field();
    return field();
};