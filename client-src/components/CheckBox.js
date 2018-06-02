import React from 'react';
import PropTypes from 'prop-types';
 
class CheckBox extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

  	handleChange() {
    	this.props.onChange();
  	}

  	render() {
		return (
			<span>
				<input type='checkbox' checked={this.props.checked} onChange={this.handleChange}/>
				<label>{this.props.label}</label>
			</span>
		)
	}
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func
}

export default CheckBox;


