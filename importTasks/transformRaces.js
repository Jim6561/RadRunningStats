//npm run transformData 2018_04
const jsonfile = require('jsonfile');
const path = require('path');
const fs = require('fs-extra');
const stats = require('statsjs');
const transformRow = require('./transformRow');

var myArgs = process.argv.slice(2);
var theFolder = myArgs[0];

if (!theFolder) {
	console.log('Must supply sourceDir');
	process.exit(-1);
}


const sourceDir = path.join(__dirname, '../data/scrapedRaces/' + theFolder);
const outputDir = path.join(__dirname, '../data/transformedRaces/' + theFolder);
const KILOMETERS_TO_MILES = 0.621371;

console.log('sourceDir ' + sourceDir);
console.log('outputDir ' + outputDir);

//Make it if it doesn't exist
fs.ensureDir(outputDir);
fs.emptyDir(outputDir);

fs.readdir(sourceDir, function(err, items) {

    items.map((raceFileStr) => {
        //Skip system files
        if (raceFileStr.startsWith('.')) return;

        console.log('transforming: ' + raceFileStr);        
    	var inputFileFullPath = path.join(sourceDir, raceFileStr);
    	var outputFileFullPath = path.join(outputDir, raceFileStr);
    	var race = jsonfile.readFileSync(inputFileFullPath);

    	transformRace(race);
    	jsonfile.writeFile(outputFileFullPath, race, (err) => {
			if (err) throw err;
		});
    });
});

var transformRace = function(race) {
	race.finishers = race.results.length;

    race.distanceMiles = getDistanceInMiles(race.distance);

    var transformedResults = [];
    race.results.map((rawRow) => {

        var transformedData = transformRow(rawRow, race.distanceMiles);
        if (transformedData !== null) {
            transformedResults.push(transformedData);
        }

    });

    race.results = transformedResults;

    var times = [];
    race.results.map((result) => {
        if (result.net) {
            times.push(result.net);
        }
    });

    var timeStats = stats(times);
    
    race.winningTime = timeStats.min();
    race.firstQuartileTime = timeStats.q1();
    race.medianTime = timeStats.median();
    race.thirdQuartileTime = timeStats.q3();
    race.lastTime = timeStats.max();

    if (race.winningTime <= 0) {
        console.log('no winning time! ' + race.winningTime);        
        console.log(times);
    }
};

var getDistanceInMiles = function(distance) {
    try
    {
        var indexOfM = distance.indexOf('M');
        if (indexOfM > -1) {
            var numberPart = distance.substring(0, indexOfM);
            if (!isNaN(numberPart)) {
                return numberPart;
            }
        }
        var indexOfK = distance.indexOf('K');
        if (indexOfK > -1) {
            var numberPart = distance.substring(0, indexOfK);
            if (isNaN(numberPart)) {
                throw 'Unpexpected distance: ' + distance;
            }
            return KILOMETERS_TO_MILES * numberPart;
        }
    } catch (e) {
        throw 'unexpected distance: ' + distance;
    }
}