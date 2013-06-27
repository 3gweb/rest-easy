var should = require('chai').should();

var RestEasy = require(__dirname + '/../');
var Utils = require(__dirname + '/../lib/utils');

describe('utils.js', function () {
	it('deve retornar controllers', function () {
		var result = Utils.importFiles(__dirname + '/controllers');
		result.should.have.deep.property('users');
		result.should.have.deep.property('users').instanceof(RestEasy.Controller);
		result.should.have.deep.property('people');
		result.should.have.deep.property('people').instanceof(RestEasy.Controller);
	});

	it('deve retornar models', function () {
		var result = Utils.importFiles(__dirname + '/models');
		result.should.have.deep.property('users');
		result.should.have.deep.property('users').instanceof(RestEasy.Model);
		result.should.have.deep.property('people');
		result.should.have.deep.property('people').instanceof(RestEasy.Model);
	});

});