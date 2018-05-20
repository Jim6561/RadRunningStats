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
		return null;
	}

	if (rawData.time) {
		myReturn.net = rawData.time;
		myReturn.gun = rawData.time;
		delete myReturn.time;
	}

	myReturn.name = name;
	return myReturn;
}