import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import AwesomeTable from '../components/AwesomeTable';
 
const RunnerSearch = ({runnerName, results, onclick, onchange, onkeyup}) => {
  
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
    		onclick={onclick}
    		onchange={onchange}
    		onkeyup={onkeyup}
    		/>
    	<AwesomeTable data={results}/>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  onclick: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
}

export default RunnerSearch;

