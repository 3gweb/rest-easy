var should = require('chai').should();

var RestEasy = require(__dirname + '/../');

describe('model.js', function () {
	it('deve conter nome e schema', function () {
		var user = new RestEasy.Model('users', {
			nome: String
		});

		user.should.have.deep.property('name', 'users');
		user.should.have.deep.property('schema');
		user.should.have.deep.property('schema.nome', String);
	});

	it('deve conter metodo speak', function () {
		var user = new RestEasy.Model('users', {
			nome: String
		});

		user.addMethod('speak', function () {});

		user.should.have.deep.property('methods.speak').an('function');
	});

	it('deve conter metodo validation', function () {
		var user = new RestEasy.Model('users', {
			nome: String
		});

		user.addValidate('nome', 'Atributo nome deve conter no mínimo 3 caracteres', function (value) {return false;});

		user.should.have.deep.property('validations[0].attribute', 'nome');
		user.should.have.deep.property('validations[0].message', 'Atributo nome deve conter no mínimo 3 caracteres');
		user.should.have.deep.property('validations[0].callback').an('function');
	});

});