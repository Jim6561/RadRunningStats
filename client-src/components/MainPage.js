import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RacesPageHolder from '../containers/RacesPageHolder';
import RunnerSearchFormHolder from '../containers/RunnerSearchFormHolder';
 
class MainPage extends React.Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(whichButton) {
    	this.props.showPage(whichButton);
  	}

	render() {

		let racesButtonClass = classNames({
			'giantButton': true,
			'selectedButton': this.props.selectedPage === 'RACES_PAGE'
		});
		let resultsButtonClass = classNames({
			'giantButton': true,
			'selectedButton': this.props.selectedPage === 'RESULTS_PAGE'
		});
  
	 	return (
	    <div>
	    	<div className='headerBar'>
		    	<span
		    		id='racesSpan'
		    		className={racesButtonClass}
		    		onClick={(e) => this.handleClick('races', e)
		    	}>Races</span>
		    	<span
		    		id='runnersSpan'
		    		className={resultsButtonClass}
		    		onClick={(e) => this.handleClick('results', e)
		    	}>Runners</span>
	    	</div>
	    	<div className='pageContent'>
	    		{this.props.selectedPage === 'RACES_PAGE' && <RacesPageHolder/>}
	    		{this.props.selectedPage === 'RESULTS_PAGE' && <RunnerSearchFormHolder/>}
	    	</div>
	   	</div>
	 	);
	}
}

MainPage.propTypes = {
  showPage: PropTypes.func.isRequired
}

export default MainPage;

