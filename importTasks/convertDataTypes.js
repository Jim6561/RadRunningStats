module.exports = function(columnHeader, rawData) {
	if (!rawData) {
		return null;
	}

	//There could be a decimal part on the seconds. But we are just ignoring that for now.
	if (columnHeader == 'net'
	  || columnHeader == 'gun'
	  || columnHeader == 'pace'
	  || columnHeader == 'split'
	  || columnHeader == 'time') {
	  	var timeParts = rawData.split(":");
	  	if (timeParts.length === 2) {
	  		return parseInt(timeParts[0]) * 60 + parseInt(timeParts[1]);
	  	}
	  	else if (timeParts.length === 3) {
	  		return parseInt(timeParts[0]) * 60 * 60 + parseInt(timeParts[1]) * 60 + parseInt(timeParts[2]);
	  	}
	  	else if (rawData === 'NTA') {
	  		return null; // Hopefully we can treat this like no data, so it doesn't mess up calculations
	  	}
	  	console.log('Unexpected time: ' + rawData);
		return null;
	}

	return rawData;
}