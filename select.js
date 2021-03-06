var ie4 = document.all && !document.getElementById;
if(ie4){

}

function getAllChildren(e){
	//取得一个元素的所有子孙，兼容ie5
	return e.all ? e.all:e.getElementsByTagName("*");
}

document.getElementBySelector = function(selector){
	//如果不支持getElementByTagName 则直接返回空数组
	if(!document.getElementsByTagName){
		return new Array();
	}
	var tokens = selector.split(" ");
	var currentContext = new Array(document);
	//从左到右检测每个单元，换言之此引擎自顶向下选元素
	for(var i = 0;i < tokens.length;i++){
		var token = tokens[i].replace(/^\s/,'').replace(/\s+$/,'');
		if(token.indexOf("#") > -1){
			var bits = token.split('#');
			var tagName = bits[0];
			var id = bits[1];
			var element = document.getElementById(id);
		    if(tagName && element.nodeName.toLowerCase() != tagName){
		    	return new Array()
		    }
		    currentContext = new Array(element);
		    continue;
    	}
    	if(token.indexOf('.') > -1){
    		var bits = token.split('.');
    		var tagName = bits[0];
    		var className = bits[1];
    		if(!tagName){
    			tagName = "*";
    		}

    	}
	}
}


function getChildren(el){
	if(el.childElement){
		return [].slice.call(el.children);
	}
	var ret = [];
	for(var node=el.firstChild;node;node=node.nextSibling){
		node.nodeType == 1 && ret.push(node);
	}
	return ret;
}

function getNext(el){
	if('nextElementSibling' in el){
		return el.nextElementSibling;
	}
	while(el = el.nextSibling){
		if(el.nodeType === 1){
			return el;
		}
	}
	return null
}

function getPrev(el){
	if('prevElementSibling' in el){
		return el.prevElementSibling;
	}

	while(el = el.prevElementSibling){
		if(el.nodeType===1){
			return el;
		}
	}

	return null;
}

"empty": fucntion(node){
	var child = node.firstChild;
	return !(child && child.nodeType == 1) && !(node.innerText ||
		node.textContext || '').length;
}

var Sizzle = function(selector,context,results,seed){
	results = results || [];
	context = context || document;
	var originContext = context;
	if(context.nodeType !== 1 && context.nodeType !== 9){
		return {};
	}
	if(!selector || typeof selector !== 'string'){
		return results;
	}

	var m,set,checkSet,extra,ret,cur,pop,i,prune = true,
	constextXML = Sizzle.isXML(context),parts=[],
	soFar = selector;
	do {
		chunker.exex("");
		m = chunker.exec(soFar);
		if(m) {
			soFar = m[3];
			parts.push(m[1]);
			if(m[2]){
				extra = m[3];
				break;
			}
		}
	}while(m)
}


function $(a,b){ //第一个构造器
	return new $.fn.init(a,b);// 第二个构造器

}
 $.fn = $.prototype = {
 	init: function(a,b){
 		this.a = a;
 		this.b = b;
 	}
 }
 //共用同一个原型
 $.fn.init.prototype = $.fn;
 //即实现$.fn=$.prototype = $.fn.init.prototype
 //
 var $ = function(expr,context){
 	var dom = [];
 	return DomArray(dom,expr,context);
 }

 //DOMArray为内部函数
 function DomArray(dom,expr,context){
 	dom = dom  || [];
 	dom.context = context;
 	dom.expr = expr;
 	dom.__proto__ = DOMArray.prototype;
 	return dom;
 }

 DomArray.prototype = $.fn = [];
 $.fn.get = function(){
 	//添加原型方法
 	console.log('添加原型方法');
 }

 var a = $('div');
 a.push("a",'b','c');
 a.get();

 $.fn.extend({
 	init: function(expr,context){
 		if(!expr){
 			return this;
 		}
 		var doc,nodes;
 		if($.isArrayLike(context)){
 			return $(context).find(expr);
 		}

 		if(expr.nodeType){
 			this.ownerDocument = expr.nodeType === 9 ? expr.ownerDocument;
 			return $.Array.merge(this,[expr]);
 		}
 		this.selector = expr+'';
 		if(typeof expr === 'string'){
 			doc = this.ownerDocument = !context ? document:getDoc(context,context[0]);
 			var scope = context || doc;
 			expr = expr.trim();


 			function manipulate(nodes,name,item,doc){

 			}
 		}
 	}
 })


function manipulate(nodes,name,item,doc){
	var elems = $.filter(nodes,function(el){
		return el.nodeType === 1
	});
	handler = insertHooks[name];
	if(item.nodeType){
		insertAdjacentNode(elems,item,handler);
	}else if(typeof item === 'string'){

	}
}


var expend = "jQuery" + (new Date()).getTime(),uuid = 0,windowData = {};
jQuery.extend({
	cache: {},
	data: function(elem,name,data){
		elem = elem == window?windowData:elem; //对window对象做特殊处理
		var id = elem[expando];
		id(!id) id=elem[expando] = ++uuid;
		if(name && !jQuery.cache[id])
			jQuery.cache[id] = {};
		if(data != undefined){
			jQuery.cache[id][name] = data;
		}
		return name ? jQuery.cache[id][name] : id;
	},
	removeData: function(elem,name){
		elem = elem == window?windowData:elem;
		var id = elem[expando];
		if(name){
			if(jQuery.cache[id]){
				delete jQuery.cache[id][name];
				name = "";

				for(name in jQuery.cache[id])
					break;
				if(!name) jQuery.removeData(elem);
			}
		}else{
			try{
				delete elem[expando];
			}catch(e){
				if(elem.removeAttribute) elem.removeData(expando);
			}
			delete jQuery.cache[id];
		}
	}
})

function Data(){
	this.cache = {};
}

Data.uuid = 1;
Data.protoytpe = {
	locker: function(owner){
		var valueOf;

		unlock = owner.valueOf(Data);

		if(typeof unlock !== 'string'){
			unlock = jQuery.expando + Data.uid++;
			valueOf = owner.valueOf;

			Object.defineProperty(owner,"valueOf",{
				value: function(pick){
					if(pick===Data){
						return unlock;
					}

					return valueOf.apply(owner);
				}

			})
		}
		//接下来开辟缓存提
		if(!this.cache[unlock]){
			this.cache[unlock] = [];
		}

		return unlock;

	},
	set: function(owner,data,value){
		var prop,cache,unlock;
		unlock = this.locker(owner);
		cache = this.cache[unlock];
		if(data==='string'){
			cache[data] = value;
		}else{
			if(jQuery.isEmptyObject(cache)){
				cache = data;
			}else{
				for(prop in data){
					cache[prop] = prop;
				}
			}
		}
		this.cached[unlock] = cache;

		return this;
	},
	get: function(){
		var cache = this.cache[this.locker(owner)];
		return key === undefined ? cache : cache[key];

	},
	access: function(owner,key,value){
      if(key === undefined || ((key && typeof key === 'string')&&
      	value === undefined)){
      	return this.get(owner,key);
      }
      this.set(owner,key,value);
      return value !== undefined ? value :key;
	},
	remove: function(owner,key){

	},
	hasData: function(owner){

	}



}

function isAttribute(attr,host){
	//仅有ie
	var attrs = host.attributes;
	return attrs[attr] && attrs.expando === true;
}

readAttribute = function(element,name){
	element = $(element);
	if(Prototype.Browser.IE){
		var t = Element._attributeTranslations.read;
		if(t.values[name]){
			return t.values[name](element,name);
		}
		if(t.names[name]){
			name = t.names[name];
		}
		if(name.include(":")){
			return (!element.attributes ||
				!element.attributes[name]?null:element.attributes[name].value)
		}
	}
  return element.getAttribute(name);
}


function addEvent(el,type,callback,useCapture){
	if(el.dispatchEvent){ //W3C方式
		el.addEventListener(type,callback,!!useCapture);
	}else{
		el.attachEvent("on"+type,callback);
	}
	return callback;  //返回callback方便卸载时调用
}

function removeEvent(el,type,callback,useCapture){
	if(el.dispatchEvent){
		//w3c优先
		if(el.dispatchEvent){
			el.removeEventListener(type,callback,!!useCapture);
		}else{
			el.dispatchEvent("on"+type,callback);
		}
	}
}

function fireEvent(el,type,args,event){
	args = args || {};

	if(el.dispatchEvent){
		//w3c方式优先
		event = document.createEvent('HTMLEvents');
		event.initEvent(type,true,true);
	}else{
		event = document.createEventObject();
	}

	for(var i in args){
		if(args.hasOwnProperty(i)){
			event[i] = args[i];
		}
	}

	if(el.dispatchEvent){
		el.dispatchEvent(event);
	}else{
		el.fireEvent('on'+type,event);
	}
}

function addEvent(element,type,handler){
	if(!handler.$$guid)
		handler.$$guid = addEvent.guid++;
	if(!element.events)
		element.event = {};
	var handlers = element.events[type];
	if(!handlers){
		handlers = element.events[type] = {};
		if(element["on"+type]){
			handlers[0] = element['on'+type];
		}
	}
	//保存当前的回调
	handlers[handler.$$guid] = handler;
	element['on'+type] = handleEvent;
}
 add = function(elem,types,handler,data,selector){
 	var elemData,eventHandler,events,t,tns,type,
 	namespaces,handleObj,handleObjIn,handlers,special;
 	if(elem.nodeType === 3 || elem.nodeType === 8
 		|| !types || !handler || !(elemData = jQuery._data(elem))){
 		return;
 	}

 }


 remove = function(elem,types,handler,selector){
 	var t,tns,type,origType,namespaces,origCount,
 	j,events,special,eventType,handleObj,
 	elemData = jQuery.hasData(elem) && jQuery._data(elem);
 	types = jQuery.trim(hoverHack(types || "")).split(" ");
 	for(t = 0;t<types.length;t++){
 		tns = rtypenamespace.exec(types[t]) || [];
 		type = origType = tns[1];// 取得事件类型
 		namespaces = tns[2]; //取得命名空间
 		if(!type){
 			for(type in events){
 				jQuery.event.remove(elem,type+types[t],handler,selector,true);
 			}
 			continue;
 		}
 		special = jQuery.event.special[type] || {};
 		type = (selector ? special.delegateType : special)
 	}
 }

dispatch = function(event){
	event = jQuery.event.fix(event || window.event);
	var i,j,cur,ret,selMatch,matched,matches,handleObj,
	sel,related,
	handlers = ((jQuery._data(this,"events")||{})[event.type]||[]),
	delegateCount = handlers.delegateCount,
	args = core_slice.call(arguments),
	run_all = !event.exclusive && !event.namespace,
	special = jQuery.event.special[event.type]||{},
	handleQueue = [];

	arg[0] = event;
	event.delegateTarget = this;//添加一个认为属性
	if(sepecial.preDispatch && special.preDispatch.call(this,event)===false ){
		return
	}
	if(delegateCount && !(event.button && event.type === 'click')){
		selMatch = {};
		matches = [];
		for(i=0;i<delegateCount;i++){
		 handleObj = handlers[i];
		 sel = handleObj.selector;
		 if(selMatch[sel] === undefined){
		 	//有多少个元素匹配就收集多少个事件描述对象
		 	selMatch[sel] = handleObj.needsContext?jQuery(sel,this).indexOf(cur) >= 0:
		 	                jQuery.find(sel,this,null,[cur]).length;
		 }	
		}if(selMatch[sel]){
			matches.push(handleObj);
		}
	}
	if(matches.length){
		handleQueue.push({elem:cur,matches:matches})
	}
}
//取得其他直接绑定的事件描述对象
if(handlers.length > delegateCount){
	handlerQueue.push({elem:this,matches:handlers.slice(delegateCount)});
}
//这个循环是从下向上执行的

jQuery.Event = function(src,prop){
	//无“new”实例化
	if(!(this instanceof jQuery.Event)){
		return new jQuery.Event(src,props);
	}

	if(src & src.type){
		this.originalEvent = src;
		this.type = src.type;
		this.isDefaultPrevented = (src.defaultPrevent ||
			src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault())?returnTrue:returnFalse;

	}else{
		this.type = type;
	}
	//如果是一个对象，复制它的属性
	if(props){
		jQuery.extend(this,props);
	}
	this.timeStamp = src && src.timeStamp || jQuery.now();

	//标记已经修改正过
	this[jQuery.expando] = true;
};

jQuery.Event.prototype = {
	preventDefault: function(){
		this.isDefaultPrevented = returnTrue;
		var e = this.originalEvent;
		if(!e){
			return;
		}
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue = false;
		}
	},
	stopPropagation:function(){
		this.isPropagationStopped = returnTrue;
		var e = this.originalEvent;
		if(!e){
			return
		}
		if(e.stopPropagation){
			e.stopPropagation()
		}
		e.cancelBubble = true;
	},
}

Deferred.wait = function(n){
	var d = new Deferred();
	var t = new Date();
	var id = setTimeout(function(){
		d.call((new Date()).getTime() - t.getTime());
	},n*1000);
	d.canceller  = function(){
		clearTimeout(id);
	};
	return d;
};

Deferred.register = function(name,fn){
	this.prototype[name] = function() {
		var a = arguments;
		return this.next(function(){
			return fun.apply(this,a);
		});
	};
};

Function.prototype.wait = function(){
	var me = this;
	var g = me(function(t){
		try{
			g.send();
		}catch(e){

		}
	});
	g.next();
}

Requester = function(a){
	this.resume = a;
};

Requester.prototype.send = function(time){
	var resume = this.resume;
	setTimeout(function(){
		resume(time);
	},time);
};

(function(resume){
	var r = Requester(resume);
	var json = yield r.send(1000);
	json = yield r.send(1000);

}).wait();

var BlobBuilder = window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder
|| window.BlobBuilder;
if(!BlobBuilder) {
	console.log("BlobBuilder 已被废弃");
}

var xhr = new XMLHttpRequest();
var img = document.getElementById('img');
xhr.open('POST','image.jpg',true);
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
xhr.responseType = 'arraybuffer';
xhr.onload = function(e){
	if(this.status === 200){
		var bb = new BlobBuilder();
		bb.append(this.response);
		var blob = bb.getBlob('image/jpeg');
		img.src = blob;

	}
};
xhr.send();


$.Observer = $.factory({
	init: function(target){
		this._event = {};
		this._target = target || this;
	},
	bind: function(type,callback){
		var listeners = this._events[type];
		if(listeners){
			listeners.push(callback);
		}else {
			this._events[type] = [callback];
		}
		return this;
	},
	unbind: function(type,callback){
		var n = arguments.length;
		if(n===0){
			this._events = [];

		}else if(n===1){

			this._events[type] = [];
		}else{
			var listeners = this._events[type] || [];
			var i = listeners.length;
			while(--i > -1){
				if(listeners[i] === callback){
					return listeners.splice(i,1);
				}
			}
		}
		return this;
	},
	fire: function(type){
        var listeners = (this._events[type] || []).concat(); //防止影响原数组
        if(listeners.length){
        	var target = this._target;
        	var args = [].slice.call(arguments);
        	if(this.rawFire){
        		args.shift();
        	}else{
        		args[0] = {
        			type:type,
        			target:target
        		};
        	}
        	for(var i = 0,callback;callback = listeners[i++];){
        		callback.apply(target,args);
        	}
        }		
	}
})

window.onload = fucntion(){
	var el = document.getElementById('move');
	var parent = doceument.getElementById('taxiway');
	var distance = parent.offsetWidth - el.offsetWidth; //总移动距离
	var begin = parseFloat(window.getComputedStyle(el,null).left); //开始位置
    var end = begin + distance;
    var fps = 30;
    var interval = 1000 / fps;
    var duration = 2000;
    var times = duration / 1000 *fps;
    var step = distance / times;


}



//jQuery里面关于动画的代码
linear: function(p){
	return p;
},
swing: function(p){
	return 0.5 - Math.cos(p*Math.PI) / 2;
}


var timeline = $.timeline = [];//时间轴

function inserFrame(frame){
	if(frame.queue) {
		var gotoQueue = 1;
		for(var i = timeline.length,el;el = timeline[--i];){
			if(el.node === frame.node){
				el.positive.push(frame);
				gotoQueue = 0;
				break;
			}
		}
		if(gotoQueue){
			timeline.unshift(frame);
		}
	}else{
		timeline.push(frame);
	}
	if(insertFrame.id === null){
		insertFrame.id = setInterval(deleteFrame, 1000/$.fps);
	}
}

insertFrame.id = null;


var AnimationPreproccess = {
	noop: $.noop,
	show: function(node,frame){
		if(node.nodeType === 1 && $.isHidden(node)){
           var display = $._data(node,'olddisplay');
           if(!display || display === 'node'){
           	  display = $.parseDisplay(node.nodeName);
           	  $._data(node,"olddisplay",display);
           }
           node.style.display = display;
           if("width" in frame.props || "height" in frame.props){
           	   if(display === 'inline' && $.css(node,'float')==='none'){
           	   	 if(!$.support.inlineBlockNeedsLayout){
           	   	 	node.style.display = "inline-block";
           	   	 }else{
           	   	 	if(display === 'inline'){
           	   	 		node.style.display = "inline-block";
           	   	 	}else{
           	   	 		node.style.display = "inline";
           	   	 		node.style.zoom = 1;
           	   	 	}
           	   	 }
           	   }
           }
		}
	},
	hide: function(node,frame){

	}
}


(function($){
	//这个东西叫做IIFE
	$.fn.extend({
		//插件名称
		pluginname: function(){
			//遍历匹配元素的集合
			return this.each(function(){
               //在这里进行编写相应代码进行处理
			});
		}
	})
	//传递jQuery到内层作用域，如果window document 在里面用的多的话，也可以穿进去
})(jQuery);

(function($){
	//这个东西叫IIFE
	//扩展这个方法到jquery
	var Plugin = function(){}
	Plugin.prototype = {};
	$.extend({
		//插件名称
		pluginname: function(options){
			//用户的统一的配置对象或者方法名
			//遍历匹配元素的配合
			var args = [].slice.call(arguments,1);
			return this.each(function(){
				//在这里编写相应代码处理
				var ui = $._data(this,pluginname);
				if(!ui){
					var opts = $.extend(true,{},$.fn.pluginname.defaults,
						typeof options === 'object'?options:{});
						ui = new Plugn(opts,this);
						$._data(this,pluginname,ui);
				}
				if(typeof options==='string' && typeof ui[options]==='function'){
					ui[options].apply(ui,args);
				}
			})
		}
	});
	$.fn.pluginname.defaults = {}
})(jQuery);


//angular 将字符串转换为函数的部分代码
$watch = function(watchExp,listener,objectEquality){
	var scope = this;
	var get = compileToFn(watchExp,'watch');
	var array = scope.$$watchers;
	var watcher = {
        fn: listener,
        last: initWatchVal,
        get: get,
        exp: watchExp,
        eq: !!objectEquality
	};
	if(!isFunction(listener)){
		var listenFn = compileToFn(listener || noop,'listener');
		watcher.fn = function(newVal,oldVal,scope){
			listenFn(scope);
		};
	}
	if(!array) {
		array = scope.$$watchers = [];
	}
	array.unshift(watcher);
	return function(){
		arrayRemove(array,watcher);
	};
}

function compileToFn(exp,name){
	var fn = $parse(exp);
	assertArgFn(fn,name);
	return fn;
}

var name,oldValue,val,
get = function(){
	oldValue = this[name];
	//这里用于收集订阅者，订阅者为调用这个get方法的某个视图函数
	//这个getter肯能被包含基层，可能是caller.caller.caller
	Observer.bind(name,arguments.callee.caller);
	return oldValue;
}

set = function(val){
	if(oldValue !== val){
		oldValue = val;
	    Observer.fire(this,name,val);//通知订阅者更新
	}

}

avalon.define("user",[],function(vm){
	vm.firstName = "司徒";//监控属性
	vm.lastName = "正美"; //监控属性
	//计算属性
	//一个包含set或get的对象方便加工为Object.defineProperties的第2个参数
	vm.fullName = {
		set: function(val){
			var array = (val || "").split(" ");
			this.firstName = array[0] || "";
			this.lastName = array[1] || "";
		},
		get: function(){
			return this.firstName + " "+this.lastName;
		}
	}
})

avalon.define(function(vm){
	vm.salutation = "Hello";
	vm.name = "World";
	vm.greet = function(){
		vm.greeting = vm.salutation + ' ' + vm.name + "!";
	}
})

//第1阶段，在循环中拼凑出一个这样的对象
var description = {
	salutation: {
		set: accessor1,
		get: accessor1,
		enumberable:true
	},
	name: {
		set: accessor2,
		get: accessor2,
		enumberable: true
	}
}

//第2阶段，得到一个充满访问器的对象
var viewmodel = {};
if(Object.defineProperties){
	Object.defineProperties(viewmodel,description)
}else{
	viewmodel = Object.defineProperties(description,names);
}
//第3个阶段，赋值和填充函数
viewmodel.salutation = vm.salutation;
viewmodel.name = vm.name;
viewmodel.greet = vm.greet;
viewmodel.$id = 'xsddfsdrfr';

avalon.define = function(name,deps,factory){
	var args = [].slice.call(arguments);
	if(typeof name !== 'string'){
		name = !avalon.models['root']?"root":modelID();
		args.unshift(name);
	}
	if(!Array.isArray(args[1])){
		args.splice(1,0,[]);
	}
	deps = args[1];
	if(typeof args[2]!=='function'){
		avalon.error('factory必须是函数');
	}

	factory = args[2];
	var scope = {};
	deps.unshift(scope); //得到所有属性与方法
	factory(scope);
	var model = modelFactory(scope);
	stopRepeatAssign = true;
	deps[0] = model;
	factory.apply(0,deps);
	deps.shift();
	stopRepeatAssign = false;
	model.$id = name;
	return avalon.models[name] = model;
};

avalon.Array = {
	ensure: function(target){
		var args = [].slice.call(arguments,1);
		args.forEach(function(el){
			if(target.indexOf(el)===-1){
				target.push(el);
			}
		});
		return target;
	}
}


avalon.bindingHandlers.visible = function(data,scopes) {
	var element = data.element;
	watchView(data.value,scopes,data,function(val){
		element.style.display = val?"block":"none";
	})
};
//watchView的实现
function watchView(text,scopes,data,callback,tokens){
	var updateView,target;
	var trimText = text.trim();
	//创建一个updateView
	updateView = function(){
		//略
	};
	//这里非常重要，我们通过判定视图刷新函数element是否在DOM数决定
	//将它移出订阅者列表
	updateView.element = data.element;
	Publish[expando] = updateView;//曝光此函数，方便collectSubscriber函数
	openComputedCollect = true;
	updateView();
	openComputedCollect = false;
	delete Publish[expando];
}
if(oldArgs !== neo){
	if(Array.isArray(neo)){
		if(oldValue && oldValue.isCollection){
			updateCollection(oldValue,neo);
		} else {
			oldValue = Collection(neo);
		}
	}else if(avalon.type(neo) === 'Object'){
		if(oldValue && oldValue.$id){
			updateModel(oldValue,neo);
		}else{
			oldValue = modelFactory(neo);
		}
	}else{
		oldValue = neo;
	}
	notifySubscribers(accessor); //通知顶层改变
	model.$events && model.$fire(name,neo,oldValue);
}
