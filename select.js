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
}  return element.getAttribute(name);
