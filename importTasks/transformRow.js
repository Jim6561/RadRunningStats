/**
 * This is common to both scrapers.
 */
const convertDataTypes = require('./convertDataTypes');
module.exports = function(rawData, distanceMiles) {

	var myReturn = Object.assign({}, rawData);

	var name = rawData.name;
	if (!name) {
		name = ((rawData.firstName || '') + ' ' + (rawData.lastName || '')).trim();
		delete myReturn.firstName;
		delete myReturn.lastName;
	}
	if (!name) {
		name = ((rawData.first || '') + ' ' + (rawData.last || '')).trim();
		delete myReturn.first;
		delete myReturn.last;
	}
	if (!name) {
		name = rawData.namelast;
		delete myReturn.namelast;
	}
	if (!name) {
		//console.log('No name ' + JSON.stringify(rawData));
		return null;
	}

	if (myReturn.time) {
		myReturn.net = rawData.time;
		myReturn.gun = rawData.time;
		delete myReturn.time;
	}

	if (myReturn['net time'] && !myReturn.net) {
		myReturn.net = myReturn['net time'];
		delete myReturn['net time'];
	}

	if (myReturn['gun time'] && !myReturn.gun) {
		myReturn.gun = myReturn['gun time'];
		delete myReturn['gun time'];
	}

	if (myReturn.age && isNaN(myReturn.age)) {
		console.log('unexpected age: ' + myReturn.age);
	}

	if (myReturn.sex
	  && myReturn.sex !== 'M'
	  && myReturn.sex !== 'F'
	  && myReturn.sex !== 'O'
	  && myReturn.sex !== 'U') {
		console.log('unexpected sex: ' + myReturn.sex);
	}

	for (var columnName in myReturn) {
	    if (myReturn.hasOwnProperty(columnName)) {
	        myReturn[columnName] = convertDataTypes(columnName, myReturn[columnName]);
	    } else {
	    	console.log('skipping');
	    }
	}

	fillInPace(myReturn, distanceMiles);

	myReturn.name = name;
	return myReturn;
}

var fillInPace = function(result, distanceMiles) {
    if (result.pace > 0) {
        return;
    }
    result.pace = result.net / distanceMiles;
}