const request = require('request');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');
const htmlScraper = require('./htmlScraper');
const aspScraper = require('./aspScraper');

//var inputFile = 'data/testSourceHtml.json';
var inputFile = 'data/testSourceAsp.json';
//var inputFile = 'data/2018_04.json';

jsonfile.readFile(inputFile, (err, eventsToScrape) => {
	if (err) throw err;

	eventsToScrape.events.forEach((event) => {
		extractEvent(event);
		
	})
	
});

extractEvent = (event) => {
	event.distances.forEach((distancePage) => {

		let config = {
			url: distancePage.url,
			pageType: event.pageType
		}

		var myTestThingy = scrapeResultsFromUrl(config, (raceResults) => {
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
scrapeResultsFromUrl = (config, callback) => {

	request(config.url, function(error, response, body) {
		var $ = cheerio.load(body);
		var scraper;
		if (config.pageType === 'html') {
			scraper = htmlScraper;
		} else if (config.pageType === 'asp') {
			scraper = aspScraper;
		} else {
			throw 'unexpected pageType: ' + config.pageType;
		}

		scraper.scrape($, config, callback);
	});
/*

	if (config.pageType === 'html') {
		scrapeHtml();
		
			var $headers = $('table tr th');
			var columnHeaders = locateColumns($headers);
			var $results = $('table tr');

			extractResults($results, columnHeaders, callback);
		});
	} else if (config.pageType === 'asp') {
		request(config.url, function(error, response, body) {
			$ = cheerio.load(body);
			var data = $('pre').text();
			var rows = data.split('\n');
			console.log('let\'s do it');
			//console.log(rows);
			var headers = rows[0];


			var place = headers.substring(0, 10).trim();
			var firstName = headers.substring(10, 32).trim();
			var lastName = headers.substring(32, 56).trim();
			var sex = headers.substring(56, 68).trim();
			var age = headers.substring(68, 76).trim();
			var time = headers.substring(76).trim();

			console.log(place);
			console.log(firstName);
			console.log(lastName);
			console.log(sex);
			console.log(age);
			console.log(time);

			var headers1 = rows[1];
			console.log(headers1);

			var place1 = headers1.substring(0, 10).trim();
			var firstName1 = headers1.substring(10, 32).trim();
			var lastName1 = headers1.substring(32, 56).trim();
			var sex1 = headers1.substring(56, 68).trim();
			var age1 = headers1.substring(68, 76).trim();
			var time1 = headers1.substring(76).trim();

			console.log(place1);
			console.log(firstName1);
			console.log(lastName1);
			console.log(sex1);
			console.log(age1);
			console.log(time1);

		});
	} else {
		
	}*/
};



