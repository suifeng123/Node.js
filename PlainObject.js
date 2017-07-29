var a = {
	name:'kevin',
	age: 0,
};

for(let key in a){
   if(a.hasOwnProperty(key)){
   	reactive(a,key,a[key]);//对每一个键，生成一个闭包，把键值传入
   }

}
 function reactive(obj,key,val){
 	Object.defineProperty(obj,key,{
 		get: function(){
 			console.log(`访问${key}`);
 			return key;
 		},
 		set: function(newVal){
 			console.log(`写入${key}:${newVal}`);
 			val = newVal;
 		}
 	});
 }

 //对于嵌套的对象实现上述的效果
 var a = {
    name:'kevin',
    age: 0,
    location:{
    	province:'bj',
    	detail:{
    		district:'haidian'
    	}
    }

 };

 function walk(obj){
 	const isObject = (value) => Object.prototype.toString.call(value) === '[object Object]';

 	for(var key in obj){
 		if(obj.hasOwnProperty(key)){
 			var item = obj[key];
 			if(isObject(item)){
 				arguments.callee(item); //递归实现
 			}else{
              reactive(obj,key,item); //对每一不是对象的键，生成一个闭包，把键值传入
 			}
 		}
 	}
 }

 function reactive(obj,key,val){
 	Object.defineProperty(obj,key,{
     get: function(){
     	console.log(`访问${key}`);
     	return val;
     },
     set: function(newVal){
     	console.log(`写入${key}:${newVal}`);
     	val = newVal; //set的时候修稿
     }

 	})
 }

 walk(a);

 console.log(a.name)
  a.name = "wangshengwefn";
  console.log(a.name);