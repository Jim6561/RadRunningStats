import React from 'react';
import PropTypes from 'prop-types';
 
const RunnerSearchForm = ({runnerName, runnerBib, onSearchClick, onNameChange, onBibChange, onKeyup}) => {
  
  return (
    <div className='searchForm'>
    	<span className='formLabel'>Name</span>
    	<input id='runnerName' value={runnerName} onChange={onNameChange} onKeyUp={onKeyup}/>
    	<span className='formLabel'>Bib Number</span>
    	<input id='runnerBib' value={runnerBib} onChange={onBibChange} onKeyUp={onKeyup}/>
    	<button onClick={onSearchClick}>Search</button>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  runnerName: PropTypes.string.isRequired,
  runnerBib: PropTypes.string.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onBibChange: PropTypes.func.isRequired,
  onKeyup: PropTypes.func.isRequired
}

export default RunnerSearchForm;


