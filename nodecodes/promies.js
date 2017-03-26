Deffered.prototype.all = function (promises) {
	var count = promises.length;
	var that = this;
	var results = [];
	promises.forEach(function (promise,i) {
		promise.then(function (data) {
			count--;
			results[i]=data;
			if(count==0){
				that.resolve(results);
			}
		},function(err){
			that.reject(err);
		});
	});
	return this.promise;
};
