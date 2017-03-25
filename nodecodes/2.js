var status = "ready";
var select = function(callback) {
	if(status==="ready"){
		status = "pending";
		db.select("SQL",function(results) {
			status="ready";
			callback(results);
		});
	}
};

