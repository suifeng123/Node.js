var Deffered = function() {
	this.state = "unfulfilled";
	this.promise = new Promise();
};
Deffered.prototype.resolve = function(obj){
	this.state = "fulfilled";
	this.promise.emit("success",obj);
};
Deffered.prototype.reject = function(obj) {
	this.state="failed";
	this.promise.emit("error",err);
};
Deffered.prototype.progress = function(obj) {
	this.promise.emit('progress',data);
};
