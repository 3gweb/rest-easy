var Controller = require('./controller'),
	Model = require('./model'),
	registerModels = require('./registerModels'),
	registerControllers = require('./registerControllers'),
	generate = require('./generateBuilder'),
	Utils = require('./utils');

var RestEasy = function () {
	return this;
};

RestEasy.prototype.initialize = function (app, mongoose, config) {
	var generated;

	this.app = app;
	this.mongoose = mongoose;
	this.config = config;
	this.pathModels = this.config.root + this.config.pathModels;
	this.pathControllers = this.config.root + this.config.pathControllers;
	this.modelMongoose = {};
	this.models = Utils.importFiles(this.pathModels);
	this.controllers = Utils.importFiles(this.pathControllers);

	this.registerModels();
	this.registerControllers();

	return this;
};

RestEasy.prototype.getModel = function (modelName) {
	return this.modelMongoose[modelName] || {};
};

RestEasy.prototype.registerModels = registerModels;

RestEasy.prototype.registerControllers = registerControllers;

RestEasy.prototype.generate = generate;

RestEasy.Controller = Controller;

RestEasy.Model = Model;

RestEasy.instance = null;

RestEasy.getInstance = function () {
	if (RestEasy.instance === null) {
		RestEasy.instance = new RestEasy();
	}
	return RestEasy.instance;
};

module.exports = RestEasy;