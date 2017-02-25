var Counter = (function(){
	//赋值
	var count = 0;

	//外部调用时形成闭包
	return function(){
		return ++count;
	} //

})();

console.log(Counter());

