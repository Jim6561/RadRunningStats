//npm run scrapeData data/2018_04.json 2018_04

const request = require('request');
const cheerio = require('cheerio');
const jsonfile = require('jsonfile');
const htmlScraper = require('./htmlScraper');
const aspScraper = require('./aspScraper');
const path = require('path');


var myArgs = process.argv.slice(2);
var inputFile = myArgs[0];
if (inputFile === undefined) {
	console.log('Must supply sourceFile parameter');
	return;
}

var outputFolder = myArgs[1];
if (!outputFolder) outputFolder = '';

jsonfile.readFile(inputFile, (err, eventsToScrape) => {
	if (err) throw err;

	eventsToScrape.events.forEach((event) => {
		extractEvent(event);
	});
});

extractEvent = (event) => {
	event.distances.forEach((distancePage) => {
		let config = {
			url: distancePage.url,
			pageType: event.pageType,
			metaDistance: distancePage.metaDistance,
			columnStyle: event.columnStyle
		}
		scrapeResultsFromUrl(config, (raceResults) => {
			var raceResults = {
				'raceName': event.raceName,
				'eventDate': new Date(event.date),
				'distance': distancePage.distance,
				'location': event.location,
				'results': raceResults
			};

			var sanitizedName = (event.raceName + '_' + distancePage.distance).replace(/[ ',/]/g, '');
			var fileName = path.join('data/scrapedRaces/' + outputFolder, sanitizedName + '.json');
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

