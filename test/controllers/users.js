var RestEasy = require(__dirname + '/../../');

var users = new RestEasy.Controller('users');

users.get('/users', function (req, res) {});

module.exports = users;