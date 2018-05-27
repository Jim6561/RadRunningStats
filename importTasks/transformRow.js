/**
 * This is common to both scrapers. It combines name parts for now
 */
module.exports = function(rawData) {
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

	if (rawData.time) {
		myReturn.net = rawData.time;
		myReturn.gun = rawData.time;
		delete myReturn.time;
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

	myReturn.name = name;
	return myReturn;
}