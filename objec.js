function  add([x,y]) {
	return x + y;
}
add([1,2]);

//函数参数的默认值
jQuery.ajax = function(url,{
	async = true,
	beforeSend = function(){},
	cache = true,
	complete = function(){},
	crossDomain = false,
	global = true,
	//..more config
}){
	//do stuff
};
//String.raw
//String.raw`Hi\u000A`  模板字符串的处理函数，返回一个反斜杠都会转义的字符串，
//代码实现如下
String.raw = function(string,...values){
	var output = "";
	for(var index=0;index<values.length;index++){
		output += string.raw[index] + values[index];
	}
	output += string.raw[index];
	return output;
}
