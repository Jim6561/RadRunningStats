import React from 'react';
import PropTypes from 'prop-types';
 
const RunnerSearchForm = ({runnerName, onSearchClick, onChange, onKeyup}) => {
  
  return (
    <div className='searchForm'>
    	Search for a name
    	<input value={runnerName} onChange={onChange} onKeyUp={onKeyup}/>
    	<button onClick={onSearchClick}>Search</button>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RunnerSearchForm;


