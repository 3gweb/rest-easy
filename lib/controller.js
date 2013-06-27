var Controller = function (name) {
	this.name = name;
	this.routes = {
		get: [],
		post: [],
		put: [],
		delete: []
	};
};

Controller.prototype.get = function (resource, callback) {
	addRoute(this.routes.get, resource, callback);
};

Controller.prototype.post = function (resource, callback) {
	addRoute(this.routes.post, resource, callback);
};

Controller.prototype.put = function (resource, callback) {
	addRoute(this.routes.put, resource, callback);
};

Controller.prototype.delete = function (resource, callback) {
	addRoute(this.routes.delete, resource, callback);
};

var addRoute = function (route, resource, callback) {
	route.push({
		resource: resource,
		callback: callback
	});
};

module.exports = Controller;