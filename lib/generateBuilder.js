var generateBuilder = function (req, res) {
	return new Builder(this, req, res);
};

var Builder = function (restEasy, req, res) {
	this.restEasy = restEasy;
	this.req = req;
	this.res = res;
	this.action = null;

	return this;
};

Builder.prototype.withModel = function (modelName) {
	this.model = this.restEasy.getModel(modelName);

	return this;
};

Builder.prototype.limit = function (total) {

	this.callback.limit(total);

	return this;
};

Builder.prototype.skip = function (total) {

	this.callback.skip(total);

	return this;
};

Builder.prototype.findAll = function (search) {
	search = search || {};

	this.action = 'find';
	this.callback = this.model.find(search);

	return this;
};

Builder.prototype.findOne = function (search) {
	search = search || {};

	this.action = 'find';
	this.callback = this.model.findOne(search);

	return this;
};

Builder.prototype.create = function () {

	this.action = 'create';

	return this;
};

Builder.prototype.update = function (search) {
	this.action = 'update';

	this.search = search;

	return this;
};

Builder.prototype.remove = function (search) {
	this.action = 'remove';

	this.search = search;

	return this;
};

Builder.prototype.execute = function () {

	var actionMap = {
		find: execFind,
		create: execCreate,
		update: execUpdate,
		remove: execRemove
	};

	actionMap[this.action].call(this);
};

var execFind = function () {
	var self = this;
	this.callback.exec(function (err, result) {
		self.res.json(result);
	});
};

var execCreate = function () {
	var self = this;
	var body = this.req.body;

	this.model.create(body, function (err, result) {
		self.res.json(result);
	});
};

var execUpdate = function () {
	var self = this;
	var body = this.req.body;

	this.model.findOneAndUpdate(this.search, body, function (err, result) {
		self.res.json(result);
	});
};

var execRemove = function () {
	var self = this;
	var body = this.req.body;

	this.model.findOneAndRemove(this.search, function (err, result) {
		self.res.json(result);
	});
};

module.exports = generateBuilder;