module.exports.scrape = function($, config, callback) {
	const privates = {
		locateColumns: ($query) => {
			var columns = $query.text().split('\n');
			var myCols = [];
			columns.map((e) => {
				myCols.push(e.toLowerCase().replace(/[\s/]/g, ''));
			});

			return myCols;
		},

		getDataRows: ($query, columnNames) => {
			var results = [];
			while($query.is("tr")) {
				var $query = $query.next();
				var columns = $query.text().split('\n');
				var rowData = {};
				columns.map((e, i) => {
					var value = e.trim(),
						colName = columnNames[i];
					if (colName.length > 0) {
						rowData[colName] = value;					
					}
				});	
				results.push(rowData);
			}
			return results;
		},

		locateHeaderRow: ($query) => {
			$query = $query.first();
			var headersFound = false;
			var row = 0;
			while (!headersFound) {
				var columns = $query.text().split('\n');

				columns.map((e) => {
					if (e.trim() === 'Place') {
						//we found the right column
						headersFound = true;
					}
				});	
				
				$query = $query.next();
				row++;
			}
			return row;
		}
	};

	var $cheerio = $('table tr');
	var columnHeaderRowIndex = privates.locateHeaderRow($cheerio);
	var $query = $cheerio.first();
	for(var i = 0; i<columnHeaderRowIndex-1; i++) {
		$query = $query.next();
	}

	var columns = privates.locateColumns($query);
	var results = privates.getDataRows($query, columns);

	callback(results);
};
