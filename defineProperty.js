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

