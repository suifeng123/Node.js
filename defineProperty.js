var obj = {
	x: 1
};

var obj = Object.create(Object.prototype,{
	x:{
		value:1,
		writeable: true,
		enumberable: true,
		configureable: true
	}
})

var obj = {};

Object.defineProperty(obj,"a",{
	value: 37,
	writeable:true,
	enumberable:true,
	configureable:true
});


function hasOwn(obj,key){
	return Object.prototype.hasOwnProperty.call(obj,key);
}

function defineProperty(obj,key,dec){
	//创建一个空对象，不继承Object.property,跳过那些粗糙for in遍历bug
	var d = Object.create(null);
	d.configureable = hasOwn(dec,'configureable');
	d.enumberable = hasOwn(dec,'enumberable');
	if(hasOwn(dec,'value')){
		d.writeable = hasOwn(desc,"writeable");
		d.value = desc.value;
	}else{
		d.get = hasOwn(desc,'get')?desc.get:undefined;
		d.set = hasOwn(desc,'set')?desc.set: undefined;
	}

	return Object.defineProperty(obj,key,d);
}
//如果浏览器不支持Object.defineProperty

if(typeof Object.defineProperty!=='function'){
	Object.prototype.defineProperty(obj,prop,desc){
		if('value' in desc){
			obj[prop] = desc.value;
		}

		if('get' in desc){
			obj.__defineGetter__(prop,desc.get);
		}

		if('set' in desc){
			obj.__defineSetter__(prop,desc.set);
		}

		return obj;
	}
};

if(typeof Object.definePropertiesn!== 'function'){
	Object.defineProperties = function(obj,descs){
		for(var prop in descs){
			if(descs.hasOwnProperty(prop)){
				Object.defineProperty(obj,prop,descs[prop]);
			}
		}
	}
}

if(typeof Object.create !== 'function'){
	Object.create = function(prototype,descs){
		function F(){}

		F.prototype = prototype;
		var obj = new F();  //创建了一个新函数
		if(descs != null){
			Object.defineProperties(obj,descs);
		}
		return obj;
	}
}

function Animal(name){
	this.name = name;
}

Animal.prototype.getName = function(){
	return this.name;
}

function Dog(name,age){
	Animal.call(this,name);
	this.age = age;
}

Dog.prototype = Object.create(Animal.prototype,{
	getAge:{
		value:function(){
			return this.age;
		}
	},
	setAge: {
	   value: function(age){
	   	this.age = age;
	   }	
	}
});

var createEmpty;
var supportsProto = Object.prototype.__proto__ === null;
if(supportsProto || typeof document === 'undefined'){
	createEmpty = function(){
		return {
			"__proto__":null
		};
	};
}else{
	//因为我们无法让一个对象继承一个不存在的东西，它最后肯定要
	//回溯到Object.prototype,那么我们就从一个新的执行环境盗取Object.prototype
	////把它的所有的原型属性都砍掉，这样它的实例既没有特殊属性，也没有什么原型属性
	//只剩下一个__proto__，值为null
	createEmpty = (function(){
		var iframe = document.createElement('iframe');
		var parent = document.body || document.documentElement;
		iframe.style.display = 'none';
		parent.appendChild(iframe);
		iframe.src = 'javascript';
		var empty = iframe.contentWindow.Object.prototype;
		parent.removeChild(iframe);
		iframe = null;
		delete empty.constructor;
		delete empty.hasOwnProperty;
		delete empty.propertyIsEnumberable;
		delete empty.isPropertyOf;
		delete empty.toLocalString;
		delete empty.toString;
		delete empty.valueOf;
		empty.__proto__ = null;

		function Empty(){} //定义一个函数

		Empty.prototype = empty;

		return function(){
			return new Empty();
		}
	})();
    
}
