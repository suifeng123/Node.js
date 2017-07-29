var a = {
	name:'kevin',
	age:0,
	location:{
		province:'bj',
		detail:{
			district:'haidian'
		}
	}
};

class Observer { //使用类的概念
	constructor(data){
		this.data = data;

		if(Observer.isObject(data)){
			this.walk(data);
		}else{
			console.error(`${Object.prototype.toString.call(data)}不是对象`);
		}
	}

	static isObject(value){ //定义一个静态方法去查看这个方法是否是一个对象
		return Object.prototype.toString.call(value) === '[object Object]';
	}

	walk(obj) {
		for(var key in obj){
			if(obj.hasOwnProperty(key)){
				var item = obj[key];
                if(Observer.isObject(item)){
                	new Observer(item);
                }else{
                	this.reactive(obj,key,item);
                }
			}
		}
	}

	reactive(obj,key,val){
		Object.defineProperty(obj,key,{
			get: function(){
				console.log(`访问${key}`);
				return val;
			},
			set: function(newVal){
				console.log(`设置${key}`);
				val = newVal;
			}
		});
	}
}

new Observer(a);