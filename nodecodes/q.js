defer.prototype.makeNodeResolver = function ()��
��������var self = this;
       return function(error,value){
	       if(error){
		       self.reject(error); //�˴������˱հ�
	       }else if(arguments.length>2){
		       self.resolve(array_slice(arguments,1));
	       }else {
		       self.resolve(value);
	       }
       };
};

