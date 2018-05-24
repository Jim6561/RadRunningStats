import React from 'react';
import PropTypes from 'prop-types';
 
class HeaderBar extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(whichButton) {
    	this.props.showPage(whichButton);
  	}

	render() {
  
	  return (
	    <div className='headerBar'>
	    	<span id='racesSpan' className='giantButton' onClick={(e) => this.handleClick('races', e)}>Races</span>
	    	<span id='runnersSpan' className='giantButton' onClick={(e) => this.handleClick('results', e)}>Runners</span>
	    </div>
	  );
	}
}

HeaderBar.propTypes = {
  showPage: PropTypes.func.isRequired
}

export default HeaderBar;

