// var assert = require('assert');
// var sinon = require('sinon');

// var RestEasy = require('../').getInstance();
// var RestEasyInstanceA = require('../');
// var RestEasyInstanceB = require('../');

// describe('rest-easy.js', function () {
// 	describe('contruct', function () {

// 		it('deve conter atributo app vazio', function () {
// 			RestEasy.app.should.empty;
// 		});

// 		it('deve conter atributo app', function () {
// 			RestEasy.initialize({
// 				app: true
// 			});
// 			RestEasy.app.should.not.empty;
// 		});

// 		it('deve conter atributo mongoose vazio', function () {
// 			RestEasy.mongoose.should.empty;
// 		});

// 		it('deve conter atributo mongoose', function () {
// 			RestEasy.initialize({}, {
// 				mongoose: true
// 			});
// 			RestEasy.mongoose.should.not.empty;
// 		});
// 	});

// 	describe('singleton', function () {

// 		it('deve conter a mesma instancia', function () {
// 			var a = RestEasyInstanceA.getInstance();
// 			var b = RestEasyInstanceB.getInstance();

// 			a.app.should.equal(b.app);
// 		});

// 		it('não deve conter a mesma instancia', function () {
// 			var a = new RestEasyInstanceA().initialize({app: true});
// 			var b = new RestEasyInstanceB().initialize({app: false});

// 			a.app.should.not.equal(b.app);
// 		});
// 	});

// });