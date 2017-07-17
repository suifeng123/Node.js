Function.prototype.bind = function(context){
  if(arguments.length <2 && context == void 0){
    return this;
  }
  var __method = this,args = [].slice.call(arguments,1);

  return function() {
    return __method.apply(context,args.concat.apply(args,arguments));
  }
}

function curry(fn){
  function inner(len,arg){
    if(len == 0){
      return fn.apply(null,arg);
    }
    return function(x){
      return inner(len-1,arg.concat(x));
    };
  }
  return inner(fn.length,[]);//輸入函數的長度
}

function sum(x,y,z,w){
  return x+y+z+w;
}

curry(sum)('a')('b')('d')('c');

function curry2(fn){
  function inner(len,arg){
    if(len < 0){
      return fn.apply(fn,arg);
    }
    return function(){
      return inner(len-arguments.length,arg.concat(Array.apply([],arguments)));
    };
  }
  return inner(fn.length,[]);
}

var _ = Object.create(null);

var _ = (function(){
  var doc = new ActiveXObject('htmlfile');
  doc.write('<script></script>');
  doc.close();
  var Obj = doc.parentWindow.Object;
  if(!Obj || Obj === Object){
    return;
  }
  var name,names = ['constructor','hasOwnProperty','isProperty',
'isPrototypeOf','propertyIsEnumberable','toLocalString','toString','valueOf'];

while(name = names.pop()){
  delete Obj.prototype(name);
}
return Obj;
}())

function partial(fn){
  var A = [].slice.call(arguments,1);
  return A.length < 1 ? fn: function(){
    var a = Array.apply([],arguments);
    //複製一份
    var c = Array.concat();
    for(var i = 0; i<c.length; i++){
      c[i] = a.shift();
    }
  }
  return fn.apply(this,c.concat(a));
}
