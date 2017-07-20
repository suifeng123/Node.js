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


var a = {
	aa:'aa'
};
Object.preventExtensions(a);
delete a.aa;  ///删除之后就不能再添加回来
Object.prototype.ccc = 4; //不能阻止为原型添加属性

var a = {
	aa:'aa'
};
Object.seal(a);

(function(global){
	function fixDescriptor(item,definition,prop){
		if(isPlainObject(item)){
			if(!('enumberable' in item)){
				item.enumberable = true;
			}
		}else{
			//如果是以es3那样普通对象定义扩展包
			item = definition[prop] = {
				value:item,
				enumberable:true,
				writable:true
			};
		}
		return item;
	}

	function isPlainObject(item){
		if(typeof item === 'object' && item !== null){
			var a = Object.getPropertyOf(item);
			return a === Object.prototype || a === null;
		}
		return false;
	}

	var funNames = Object.getOwnPropertyNames(Function);
	global.Class = {
		create: function(superclass,definition){
			if(arguments.length === 1){
				definition = superclass;
				superclass = Object;
			}

			if(typeof superclass !== 'function') {
				throw new Error('superclass must be a function')
			}
			var _super = superclass.prototype;
			var statics = definition.statics;
			delete definition.statics;
			//重新定义definition
			Object.keys(definition).forEach(function(prop){
				var item = fixDescriptor(definition[prop],definition,prop);
				if(typeof item.value === 'function' && typeof _super[prop]==='function'){
					var _super = function(){
						//创建方法连
						return _super[prop].apply(this,arguments);
					};
					var _superApply = function(args){
						return _super[prop].apply(this,args);
					};
					var fn = item.value;
					item.value = function(){
						var t1 = this._super;
						var t2 = this._superApply;
					    this._super = _super;
					    this._superApply = _superApply;
					    var ret = fn.apply(this,arguments);
					    this._super = t1;
					    this._superApply = t2;
					    return ret;
					}
				}
			});

			var Base = function(){
				this.init.apply(this,arguments);
			};
			Base.prototype = Object.create(_super,definition);
			Base.prototype.constructor = Base;
			//确保一定存在的init方法
			if(typeof Base.prototype.init !== 'function'){
				Base.prototype.init = function(){
					superclass.prototype.init = function(){
						superclass.apply(this,arguments);
					}
				}
			}


			
		}
	}
})
