const request = require('request');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');
const htmlScraper = require('./htmlScraper');
const aspScraper = require('./aspScraper');

var inputFile = 'data/testSourceHtml.json';
//var inputFile = 'data/testSourceAsp.json';
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
			pageType: event.pageType,
			metaDistance: distancePage.metaDistance,
			columnStyle: event.columnStyle
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
};

