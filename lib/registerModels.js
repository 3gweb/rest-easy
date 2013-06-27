var registerModels = function () {
	var self = this;

	Object.keys(this.models).forEach(function (modelName) {
		var model = self.models[modelName];

		var schema = new self.mongoose.Schema(model.schema);
		schema.methods = model.methods;

		model.validations.forEach(function(validation){
			schema.path(validation.attribute).validate(validation.callback, validation.message);
		});

		var modelMongoose = self.mongoose.model(model.name, schema);
		self.modelMongoose[modelName] = modelMongoose;
	});
};

module.exports = registerModels;