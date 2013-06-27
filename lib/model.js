var Model = function (name, schema) {
	this.name = name;
	this.schema = schema;
	this.methods = {};
	this.validations = [];
};

Model.prototype.addMethod = function (name, callback) {
	this.methods[name] = callback;
};

Model.prototype.addValidate = function (attribute, message, callback) {
	this.validations.push({
		attribute: attribute,
		message: message,
		callback: callback
	});
};
module.exports = Model;