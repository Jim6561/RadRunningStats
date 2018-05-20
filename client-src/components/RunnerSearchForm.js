import React from 'react';
import PropTypes from 'prop-types';
 
const RunnerSearchForm = ({runnerName, onclick, onchange, onkeyup}) => {
  
  return (
    <div>
    	Search for a name
    	<input value={runnerName} onChange={onchange} onKeyUp={onkeyup}/>
    	<button onClick={onclick}>Search</button>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  onclick: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
}

export default RunnerSearchForm;


