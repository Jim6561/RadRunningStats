import React from 'react';
import PropTypes from 'prop-types';
 
const RunnerSearchForm = ({runnerName, onClick, onChange, onKeyup}) => {
  
  return (
    <div className='searchForm'>
    	Search for a name
    	<input value={runnerName} onChange={onChange} onKeyUp={onKeyup}/>
    	<button onClick={onClick}>Search</button>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default RunnerSearchForm;


