var person = {
    name:"张三"
};

var proxy = new Proxy(person,{
  get: function(target,property){
    if(property in target){
      return target[property];
    }else{
      throw new ReferenceError("Property\""+property+"\"does not extist.");
    }
  }
});
