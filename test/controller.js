var should = require('chai').should();

var RestEasy = require(__dirname + '/../');

describe('controller.js', function () {

	it('deve conter o nome do controller', function () {
		var users = new RestEasy.Controller('users');

		users.should.have.deep.property('name', 'users');
	});

	it('deve retornar rotas GET', function () {
		var users = new RestEasy.Controller('users');

		users.get('/users', function (req, res) {});

		users.should.have.deep.property('routes.get[0].resource', '/users');
		users.should.have.deep.property('routes.get[0].callback').an('function');
	});

	it('deve retornar rotas POST', function () {
		var users = new RestEasy.Controller('users');

		users.post('/users', function (req, res) {});

		users.should.have.deep.property('routes.post[0].resource', '/users');
		users.should.have.deep.property('routes.post[0].callback').an('function');
	});

	it('deve retornar rotas PUT', function () {
		var users = new RestEasy.Controller('users');

		users.put('/users', function (req, res) {});

		users.should.have.deep.property('routes.put[0].resource', '/users');
		users.should.have.deep.property('routes.put[0].callback').an('function');
	});

	it('deve retornar rotas DELETE', function () {
		var users = new RestEasy.Controller('users');

		users.delete('/users', function (req, res) {});

		users.should.have.deep.property('routes.delete[0].resource', '/users');
		users.should.have.deep.property('routes.delete[0].callback').an('function');
	});

});