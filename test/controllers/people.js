var RestEasy = require(__dirname + '/../../');

var people = new RestEasy.Controller('people');

people.get('/people', function (req, res) {});

module.exports = people;