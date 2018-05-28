module.exports.scrape = function($, config, callback) {

	const privates = {
		possibleColumns: [
			'Place',
			'Bib',
			'First Name',
			'Last Name',
			'Sex',
			'Age Group',
			'Age',
			'Time'
		],

		locateColumns: (headers) => {
			var columnMetadata = [];
			var addedAgeGroup = false;

			privates.possibleColumns.map((column) => {
				//Don't want both Age and Age Group, Age is contained in Age Group.
				if (addedAgeGroup && column === 'Age') {
					return;
				}

				var startIndex = headers.indexOf(column);
				if (startIndex > -1) {
					var name = privates.sanitizeColumnName(column);

					//The time data always starts to the left of the header.
					//Which is annoying.
					if (name === 'time') {
						startIndex -= 2;
					}
					//Oh dear, another hack for a column with sticky-out data
					if (column === 'Age Group') {
						startIndex -= 2;
					}

					columnMetadata.push({
						'name': name,
						'startIndex': startIndex
					});

					if (column === 'Age Group') {
						addedAgeGroup = true;
					}
				}
			});

			//Might be a good idea to sort by startIndex at this point		
			columnMetadata.map((column, i, array) => {
				if (i < array.length - 1) {
					column.endIndex = array[i+1].startIndex;
				}
			});
			return columnMetadata;
		},

		sanitizeColumnName: (name) => {
			switch(name) {
				case 'Place':
					return 'place';
				case 'First Name':
				case 'Frist Name':
					return 'firstName';
				case 'Last Name':
					return 'lastName';
				case 'Sex':
					return 'sex';
				case 'Age':
					return 'age';
				case 'Time':
					return 'time';
				case 'Age Group':
					return 'div';
				case 'Bib':
					return 'bib';
				default:
					throw 'Unexpected column: ' + name;
			}
		},

		getDataRows: ($, metaDistance) => {
			//Remove things that can get between the meta and the data. We really want
			//to move to the 'next' subling and it to be a pre
			$('meta[columns]').remove();
			$('p').remove();

			var $preTag = $('meta[distance="' + metaDistance + '"]+pre');
			var data = $preTag.text().split('\n');
			return data;
		},

		extractRow: (rowString, columnData) => {
			var rawData = {};

			columnData.map((column, i) => {
				var columnName = column.name
					data = column.endIndex === null
						?
					rowString.substring(column.startIndex)
						:
					rowString.substring(column.startIndex, column.endIndex);				
				data = data.trim();
				rawData[columnName] = data;
			});
			return rawData;
		},


	}

	var $columnMeta = $('meta[columns]');
	var rows = privates.getDataRows($, config.metaDistance);
	var headers = rows.shift();
	var columnData = privates.locateColumns(headers);
	var results = [];

	rows.map((rowString, i) => {
		var rawData = privates.extractRow(rowString, columnData);
		results.push(rawData);
	});
	callback(results);
};
