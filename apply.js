Function.prototype.apply || (Function.prototype.apply = function(x,y){
	x = x || window;
	y = y || [];
	x.__apply = this;
	if(!x.__apply){
		x.constructor.prototype.__apply = this;
	}
	var r,j = y.length;
	switch(j){
		case 0: r = x.__apply();break;
		case 1: r = x.__apply(y[0]);break;
		case 2: r = x.__apply(y[0],y[1]);break;
		case 3: r = x.__apply(y[0],y[1],y[2]);break;
		case 4: r = x.__apply(y[0],y[1],y[2],y[3]);break;
		default:
		   var a = [];
		   for(var i=0;i<j;i++)
		   	  a[i] = "y["+i+"]";
		   	r = eval("x.__apply("+a.join(",")+")");
		   	break;
	}
	try{
		delete x.__apply?x.__apply:x.constructor.prototype.__apply;
	}catch(e){

	}
	return r;
});

Function.prototype.call || (Function.prototype.call = function(){
	var a = arguments,x = a[0],y=[];
	for(var i=0,j = a.length;i<j;i++){
		y[i-1] = a[i];

	}

	return this.apply(x,y);
})


var isEventSupported = (function(){
	var TAGNAMES = {
		'select':'input','change':'input',
		'submit':'form','reset':'form',
		'error':'img','load':'img','abort':'img'
	}

	function isEventSupported(eventName){
		var el = document.createElement(TAGNAMES[eventName] || 'div');
		eventName = 'on'+eventName;

		var isSupported = (eventName in el);
		if(!isSupported){
			el.setAttribute(eventName,"return;");
			isSupported = typeof el[eventName] === 'function';

		}
		el = null;
		return isSupported;
	}

	return isEventSupported;
})();d




var prefixes = ['','-webkit','-o-','-moz-','-ms-'];

var cssMap = {
	"float":$.support.cssFloat?'cssFloat':'styleFloat',
	background:'backgroundColor'
};

function cssName(name,host,cameCase){
	if(cssMap[name]){
		return cssMap[name];
	}

	host = host || document.documentElement;
	for(var i = 0,n = prefixes.length;i++){
		cameCase = $.String.camelize(prefixes[i]+name);
	    if(cameCase in host){
	    	return (cssMap[name] = cameCase);
	    }
	}
	reurn null;

}

function A() {
	var count  = 0;
	this.aa = "aa";
	this.method = function(){
		console.log("这里是特殊的方法");
	}
	this.obj = {}
}


A.prototype = {
	aa: "aa",
	method: function(){

	}
};

var a = new A;
var b = new A;
console.log(a.aa === b.aa);//返回true
console.log(a.obj === b.obj);//返回false
delete a.method
consoele.log(a.mehtod === A.prototype.method) //返回true


function A() {}

A.prototype = {
	aaa:1
}

function B(){}

B.prototype = A.prototype;
var b = new B;
console.log(b.aaa);
A.prototype.bbb = 2;

console.log(b.bbb);

function  extend(destination,source){
	for(var prop in source){
		destination[prop] = source[prop];
	}
	return destination;
}

A.prototype = {
	aa: function(){
		console.log(1);
	}
}

function brige() {} ///设置一个桥梁

bridge.prototype = A.prototype;

function B(){

}

B.prototype = new bridge();

var a = new A;
var b = new B;

