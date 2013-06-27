var RestEasy = require(__dirname + '/../../');

var people = new RestEasy.Model('people', {
	name: String,
	age: Number 
});

module.exports = people;