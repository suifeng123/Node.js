(function(){
	var initializing = false;
	var fnTest = /xyz/.test(function(){
		xyz;
	})?/\b_super\b/:/.*/;
	//所有人工类的基类
	this.Class = function(){};
	//这是用于生成目标类的子类
	Class.extend = function(prop){
		var _super = this.prototype;

		initializing = true;
        var prototype = new this();

        initializing = false;

        for(var name in prop){
        	prototype[name] = typeof prop[name] === "function" &&
        	typeof _super[name] === 'function' && fnTest.test(prop[name])?
        	(function(name,fn){
        		return function(){
        			var tmp = this._super;
        			//当我们调用时，
        			this._super = _super[name];
        			var ret = fn.apply(this,arguments);
        			//还原this._super
        			this._super = tmp;
        			//返回结果
        			return ret;
        		}
        	})(name,prop[name]):prop[name];
        }

        //这个是目标类的真实构造器
        function Class() {
        	if(!initializing && this.init)
        		this.init.apply(this,arguments);

        }

        //将修改好的原型赋值
        Class.prototype = prototype;
        //确保原型上的constructor正确指向自身
        Class.prototype.constructor = Class;
        //添加extend方法，生于生产它的子类
        Class.extend = arguments.callee;

        return Class;

	}
})();


var obj = {
	aa: 1,
	toString: function(){
		return "1";
	}
}

if(Object.defineProperty && Object.seal) {
	Object.defineProperty(obj,"name",{
		value:2
	})
}