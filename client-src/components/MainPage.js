import React from 'react';
import PropTypes from 'prop-types';
import RacesTable from '../components/RacesTable';
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
  
	  return (
	    <div>
	    	<div className='headerBar'>
		    	<span id='racesSpan' className='giantButton' onClick={(e) => this.handleClick('races', e)}>Races</span>
		    	<span id='runnersSpan' className='giantButton' onClick={(e) => this.handleClick('results', e)}>Runners</span>
	    	</div>
	    	<div className='pageContent'>
	    		{this.props.selectedPage === 'RACES_PAGE' && <RacesTable data={this.props.races}/>}
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

