import React from 'react';
import PropTypes from 'prop-types';
var format = require('format-duration');
 
class TimeValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var output = '';
    if (this.props.value) {
      var output = format(this.props.value * 1000);
    }

    return (
      <div>{output}</div>
    );
  }
}

TimeValue.propTypes = {
  value: PropTypes.number
}

export default TimeValue;


