const jsonfile = require('jsonfile');
const path = require('path');
const fs = require('fs-extra');

if (process.argv.length < 2) {
	console.log('Must supply sourceDir');
	process.exit(-1);
}

var myArgs = process.argv.slice(2);
var theFolder = myArgs[0];

var sourceDir = path.join(__dirname, '../data/scrapedRaces/' + theFolder);
var outputDir = path.join(__dirname, '../data/transformedRaces/' + theFolder);

console.log('sourceDir ' + sourceDir);
console.log('outputDir ' + outputDir);

//Make it if it doesn't exist
fs.ensureDir(outputDir);
fs.emptyDir(outputDir);

fs.readdir(sourceDir, function(err, items) {

    items.map((raceFileStr) => {
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
};