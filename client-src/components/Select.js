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
      if (!this.props.visible) {
        return "";
      }
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
  visible: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

Select.defaultProps = {
  visible: true
}

export default Select;


