//实现一个Observer
/*
1.实现双向数据绑定需要三样东西  Observer Compiler Watcher  11111111
 */

//首先实现一个Observer

var data = {
	name:'wangshengwen'
};
observer(data); //监听数据
data.name = "chenglong";

function observer(data){
	function isObject(data){
		if(Object.prototype.toString.call(data)==='[object Object]'){
			return true;
		}else{
			return false;
		}
	}
	if(isObject(data)) return;
	//取出所有的属性进行遍历
	Object.keys(data).forEach(function(key){
		defineReative(data,key,data[key]);  //形成了一个闭包保存在环境中
	});
};

function defineReative(data,key,val){
	observer(val);//进行监听子属性
	Object.defineProperty(data,key,{
		enumerable:true, //可以枚举
		configurable:true,//可以再define
		get:function(){
			console.log(`访问属性${key}`);
			return val;
		},
		set:function(newVal){
			console.log('哈哈，监听到了属性发生了变化',val,'==>',newVal);
			val = newVal;
		}
	});
}



