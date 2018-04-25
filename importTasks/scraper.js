/*
I'm looking to get output from step 1 as a javascript object with all the data in it.
Example

{
	"raceName": "Springtime 10K/5K/1Mile",
	"eventDate": a js date object?,
	"distance": "10K",
	"results": [
		{
			"Name": "Christopher Haynes",
			"Sex": "M",
			"Age": 25,
			"City": "Tallahassee",
			"State": "FL",
			"Place": "1",
			"Div/Tot": "1/36",
			"Div": "M25-29",
			"No.": "785",
			"Split": time in seconds?,
			"Net": time in seconds?,
			"Gun": time in seconds?,
			"Pace": time in seconds?
		}, {
			"Name": "Justin Garrard",
			"Sex": "M",
			"Age": 31,
			"City": "Tallahassee",
			"State": "FL",
			"Place": "2",
			"Div/Tot": "1/45",
			"Div": "M30-34",
			"No.": "236",
			"Split": time in seconds?,
			"Net": time in seconds?,
			"Gun": time in seconds?,
			"Pace': time in seconds?	
		}
	]
}

 */

const request = require('request');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');


var inputFile = 'data/testSource.json';
jsonfile.readFile(inputFile, (err, eventsToScrape) => {
	if (err) throw err;


	eventsToScrape.events.forEach((event) => {
		extractEvent(event);
		
	})
	
});

extractEvent = (event) => {
	event.distances.forEach((distancePage) => {

		var myTestThingy = scrapeResultsFromUrl(distancePage.url, (raceResults) => {
			var raceResults = {
				'raceName': event.raceName,
				'eventDate': new Date(event.date),
				'distance': distancePage.distance,
				'results': raceResults
			};

			var sanitizedName = (event.raceName + '_' + distancePage.distance).replace(/[ ',/]/g, '');
			var fileName = 'data/scrapedRaces/' +  sanitizedName + '.json';
			console.log('writing file: ' + fileName);
			jsonfile.writeFile(fileName, raceResults, (err) => {
				if (err) throw err;
			});
		});
	});
};


/**
 * The request to load the data is asynchronous. So use the call back to save it.
 */
scrapeResultsFromUrl = (url, callback) => {
	request(url, function(error, response, body) {
		$ = cheerio.load(body);
		var $headers = $('table tr th');
		var columnHeaders = locateColumns($headers);
		var $results = $('table tr');

		extractResults($results, columnHeaders, callback);
	});
};


locateColumns = ($headers) => {
	var columnIndex = 0;
	var results = {};
	var $query = $headers.first();
	while (columnIndex < $headers.length) {
		results[columnIndex] = $query.text().trim().toLowerCase().replace(/[/]/g, '');
		$query = $query.next();
		columnIndex++;
	}
	return results;
}

extractResults = ($results, columnHeaders, callback) => {
	//Let's assume the first row is the headers
	var resultsData = [];

	var $rowData = $results.first().next();
	rowIndex = 1; // cos we are skipping the header row.

	while(rowIndex < $results.length) {
		var rowResult = extractRow($rowData.children(), columnHeaders);
		resultsData.push(rowResult);

		$rowData = $rowData.next();
		rowIndex++;

	}

	callback(resultsData);
}

extractRow = ($rowTableData, columnHeaders) => {
	var columnIndex = 0;
	var $rowResult = {};
	var $pointer = $rowTableData.first();

	while(columnIndex < $rowTableData.length) {
		var columnHeader = columnHeaders[columnIndex],
			rawData = $pointer.text().trim();
		$rowResult[columnHeader] = convertDataTypes(columnHeader, rawData);

		$pointer = $pointer.next();
		columnIndex++;
	}

	return $rowResult;
}

convertDataTypes = (columnHeader, rawData) => {
	if (columnHeader == 'Net'
	  || columnHeader == 'Gun'
	  || columnHeader == 'Pace') {
	  	var timeParts = rawData.split(":");
	  	if (timeParts.length === 2) {
	  		return parseInt(timeParts[0]) * 60 + parseInt(timeParts);
	  	}
	  	else if (timeParts.length === 3) {
	  		return parseInt(timeParts[0]) * 60 * 60 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
	  	}
	  	console.log('Unexpected time: ' + rawData);
		return rawData + ' in seconds';
	}

	return rawData;

}
