import React from 'react';
import PropTypes from 'prop-types';
 
class Select extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

  	handleChange(e) {
    	this.props.onChange(e.target.value);
  	}

  	render() {
  		var divData = ['England', 'Brazil', 'Panama'];
    
		return (
			<select onChange={(e) => this.handleChange(e)}>
            {this.props.options.map((value, i) => 
              <option key={i} value={value}>{value}</option>

            )}
          </select>
		)
	}
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select;


