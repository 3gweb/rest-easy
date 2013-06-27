var fs = require('fs');

var Util = {};

Util.importFiles = function(dir) {
	var collection = {};
	var imported = null;
	fs.readdirSync(dir).forEach(function(fileName){
		fileName = fileName.substring(0, fileName.indexOf('.'));
		imported = require(dir + '/' + fileName);

		collection[fileName] = imported;
	});

	return collection;
};

module.exports = Util;