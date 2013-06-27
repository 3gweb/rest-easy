var registerControllers = function () {
	var self = this;

	Object.keys(this.controllers).forEach(function (controllerName) {
		var controller = self.controllers[controllerName];

		addRoute.call(self, 'get', controller);
		addRoute.call(self, 'post', controller);
		addRoute.call(self, 'put', controller);
		addRoute.call(self, 'delete', controller);
	});
};

var addRoute = function (method, controller) {
	var self = this;

	controller.routes[method].forEach(function (route) {
		self.app[method](route.resource, function (req, res) {
			route.callback.call(self, req, res);
		});
	});
};

module.exports = registerControllers;