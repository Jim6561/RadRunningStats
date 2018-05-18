const convertDataTypes = require('./convertDataTypes');
module.exports.scrape = function($, config, callback) {

	const privates = {
		"expectedColumns": {
			"C6": [
				{
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
			"C4": [{
					"name": "place",
					"index": 0,
					"length": 11
				}, {
					"name": "firstName",
					"index": 11,
					"length": 21
				}, {
					"name": "lastName",
					"index": 32,
					"length": 23
				}, {
					"name": "time",
					"index": 55,
					"length": 8
				}]
		},

		getDataRows: ($, metaDistance) => {
			$('meta[columns]').remove();
			var $preTag = $('meta[distance="' + metaDistance + '"]+pre');
			var data = $preTag.text().split('\n');
			return data;
		},

		extractRow: (rowString, columnData) => {
			var rawData = {};

			columnData.map((column, i) => {
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

	var rows = privates.getDataRows($, config.metaDistance);
	var headers = rows.shift();
	var results = [];
	var columnData = privates.expectedColumns[config.columnStyle];

	rows.map((rowString, i) => {
		var rawData = privates.extractRow(rowString, columnData);
		var transformedData = privates.transformRow(rawData);
		if (transformedData !== null) {
			results.push(transformedData);
		}
	});
	callback(results);
};
