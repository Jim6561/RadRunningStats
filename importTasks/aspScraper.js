const convertDataTypes = require('./convertDataTypes');
module.exports.scrape = function($, config, callback) {

	const privates = {
		"expectedColumns": [{
			"name": "place",
			"index": 0,
			"length": 10
		}, {
			"name": "firstName",
			"index": 10,
			"length": 22
		}, {
			"name": "lastName",
			"index": 32,
			"length": 24
		}, {
			"name": "sex",
			"index": 56,
			"length": 12
		}, {
			"name": "age",
			"index": 68, 
			"length": 8
		}, {
			"name": "time",
			"index": 76,
			"length": 8
		}],

		extractRow: (rowString) => {
			var rawData = {};

			privates.expectedColumns.map((column, i) => {
				var columnName = column.name,
					data = rowString.substring(column.index, column.index + column.length).trim();
				rawData[columnName] = convertDataTypes(columnName, data);
			});
			return rawData;
		},

		transformRow: (rawData) => {
			var myReturn = Object.assign({}, rawData);
			var name = ((rawData.firstName || '') + ' ' + (rawData.lastName || '')).trim();
			if (!name) {
				return null;
			}

			myReturn.name = name;
			delete myReturn.firstName;
			delete myReturn.lastName;
			return myReturn;
		}
	}

	var data = $('pre').text();
	var rows = data.split('\n');
	var headers = rows.shift();
	var results = [];

	rows.map((rowString, i) => {
		var rawData = privates.extractRow(rowString);
		results.push(privates.transformRow(rawData));
	});

	callback(results);
};
