var P = (function(prototype,ownPrototype,undefined){


	function isObject(o){
		return typeof o === 'object';
	}

	function isFunction(f){
		return typeof f === 'function';
	}

	function BareConstructor(){};

	function P(_superclass,definition){
		//如果只传一个参数，没有指定父类
		if(definition === undefined){
			definition = _superclass;
			_superclass = Object;
		}
		function C(){
			var self = new Bare();
			console.log(self.init);
			if(isFunction(self.init)) self.init.apply(self,arguments);
			return self;

		}

		function Bare(){}

		C.Bare = Bare;
		
	}


})