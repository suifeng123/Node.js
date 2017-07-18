var JS = {
	VERSION:'2.2.1'

};

JS.Class = function(classDefinition){
	//返回膜表整整的构造器
	function getClassBase(){
		return function(){
			if(typeof this['constructor'] === 'function' &&
				preventJSBaseConstructorCall === false){
				this.constructor.apply(this,arguments);
			}
		}
	}
	//为目标类添加类成员和原型成员
	function createClassDefinition(classDefinition){
		//此对象用于保存父类的同名函数
		var parent = this.prototype['parent'] || (this.prototype['parent']={});
		for(var prop in classDefinition){
			if(prop === 'statics'){
				for(var sprop in classDefinition.statics){
					this[sprop] = classDefinition.statics[sprop];
				}
			}else{
			//为目标类添加成员，如果是函数，那么检查它还没有同名的超类
			if(typeof this.prototype[prop] === 'function'){
				var parentMethod = this.prototype[prop];
				parent[prop] = parentMethod;
			}	

			this.prototype[prop] = classDefinition[prop];
			}
		}
	}

	var preventJSBaseConstructorCall = true;
	var Base = getClassBase();

	preventJSBaseConstructorCall = false;

	createClassDefinition.call(Base,classDefinition);

	//用于创建当前类的子类
	Base.extend = function(classDefinition){
		preventJSBaseConstructorCall = true;
		var SonClass = getClassBase();

		SonClass.prototype = new this(); 
		createClassDefinition.call(SonClass,classDefinition);
		SonClass.extend = this.extend;

		return SonClass;
	}

	return Base;
}