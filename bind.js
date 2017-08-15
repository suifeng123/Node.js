function bind(fn,ctx){
	//簡化版本的bind函數
	function bindFn(a) {
		var l = arguments.length;
		console.log(arguments);
		return l 
		      ? l>1
		         ? fn.apply(ctx,arguments)
		         : fn.call(ctx,a)
		        :fn.call(ctx)
		    }
		bindFn._length = fn.length;
		return boundFn;
	}
}
function fn('fas'){
	console.log("11111");
}
bind()