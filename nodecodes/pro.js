promise()
.then(obj.api1)
.then(obj.api2)
.then(obj.api3)
.then(obj.api4)
.then(function(value4){
	//do something with value4
},function(error){
	//handle any error from step1 to step4
})
.done();
