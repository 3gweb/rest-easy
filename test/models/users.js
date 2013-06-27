var RestEasy = require(__dirname + '/../../');

var users = new RestEasy.Model('users', {
	nome: String
});

module.exports = users;