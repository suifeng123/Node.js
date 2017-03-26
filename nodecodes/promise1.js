var peomisify = function(res) {
	var deferred = new Deferred();
	var result='';
	res.on('data',function(chunk){
		result += chunk;
		deferred.progress(chunk);
	});
	res.on('end',function(){
		deferred.resolve(result);
	});
	res.on('error',function(err){
		deferred.reject(err);
	});
	return deffered.promise;
};

