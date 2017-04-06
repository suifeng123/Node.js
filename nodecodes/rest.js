var routes = {'all':[]};
var app = {};
app.use = function (path,action) {
	routes.all.push([pathRegexp(path),action]);
};
['get','put','delete','post'].forEach(function(method) {
	routes[method] = [];
	app[method] = function(path,action) {
		routes[method].push([pathRegexp(path),action]);
	};
});
