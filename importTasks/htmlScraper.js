const convertDataTypes = require('./convertDataTypes');
const transformRow = require('./transformRow');
module.exports.scrape = function($, config, callback) {

	const privates = {
		locateColumns: ($headers) => {
			var columnIndex = 0;
			var results = {};
			var $query = $headers.first();
			while (columnIndex < $headers.length) {
				results[columnIndex] = $query.text().trim().toLowerCase().replace(/[./]/g, '');
				$query = $query.next();
				columnIndex++;
			}
			return results;
		},

		extractResults: ($results, columnHeaders, callback) => {
			//Let's assume the first row is the headers
			var resultsData = [];

			var $rowData = $results.first().next();
			rowIndex = 1; // cos we are skipping the header row.

			while(rowIndex < $results.length) {
				var rawData = privates.extractRow($rowData.children(), columnHeaders);
				var transformedData = transformRow(rawData);

				if (transformedData !== null) {
					resultsData.push(transformedData);
				}

				$rowData = $rowData.next();
				rowIndex++;

			}

			callback(resultsData);
		},

		extractRow: ($rowTableData, columnHeaders) => {
			var columnIndex = 0;
			var $rowResult = {};
			var $pointer = $rowTableData.first();

			while(columnIndex < $rowTableData.length) {
				var columnHeader = columnHeaders[columnIndex],
					rawData = $pointer.text().trim();
				if (columnHeader === 'no') {
					columnHeader = 'bib';
				}

				$rowResult[columnHeader] = convertDataTypes(columnHeader, rawData);

				$pointer = $pointer.next();
				columnIndex++;
			}

			return $rowResult;
		}
	}

	var $headers = $('table tr th');
	var columnHeaders = privates.locateColumns($headers);
	var $results = $('table tr');

	privates.extractResults($results, columnHeaders, callback);
};
