Function.prototype.apply || (Function.prototype.apply = function(x,y){
	x = x || window;
	y = y || [];
	x.__apply = this;
	if(!x.__apply){
		x.constructor.prototype.__apply = this;
	}
	var r,j = y.length;
	switch(j){
		case 0: r = x.__apply();break;
		case 1: r = x.__apply(y[0]);break;
		case 2: r = x.__apply(y[0],y[1]);break;
		case 3: r = x.__apply(y[0],y[1],y[2]);break;
		case 4: r = x.__apply(y[0],y[1],y[2],y[3]);break;
		default:
		   var a = [];
		   for(var i=0;i<j;i++)
		   	  a[i] = "y["+i+"]";
		   	r = eval("x.__apply("+a.join(",")+")");
		   	break;
	}
	try{
		delete x.__apply?x.__apply:x.constructor.prototype.__apply;
	}catch(e){

	}
	return r;
});

Function.prototype.call || (Function.prototype.call = function(){
	var a = arguments,x = a[0],y=[];
	for(var i=0,j = a.length;i<j;i++){
		y[i-1] = a[i];

	}

	return this.apply(x,y);
})