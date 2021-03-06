import React from 'react';
import PropTypes from 'prop-types';
 
const RunnerSearchForm = ({runnerName, onclick, onchange}) => {
  
  return (
    <div>
    	Search for a name
    	<input value={runnerName} onChange={onchange}/>
    	<button onClick={onclick}>Search</button>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  onclick: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
}

export default RunnerSearchForm;


