import React from 'react';
import PropTypes from 'prop-types';
var format = require('format-duration');
 
const TimeValue = ({value}) => {

	var output = '';
	if (value) {
		var output = format(value * 1000);
	}

	return (
		<div>{output}</div>
	);
}

TimeValue.propTypes = {
  value: PropTypes.string
}

export default TimeValue;


