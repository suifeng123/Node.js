(function (name, definition) {
	//检测上下文环境是否为AMD或者是CMD
	var hasDefine = typeof define === "function",
        //检查上下文环境是否为node
		hasExports = typeof module !== 'undefined' && module.exports;
	if(hasDefine){
		//AMD环境或者CMD环境
		define(definition);
	}else if (hasExports) {
		//定义为Node模块
		module.exports = definition();
	}else {
		//将模块的执行结果改在window变量
		this[name]=definition();
	}
})('hello',function () {
	var hello = function () {};
	return hello;
});
