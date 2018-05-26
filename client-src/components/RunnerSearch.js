import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import ResultsTable from '../components/ResultsTable';
 
const RunnerSearch = ({runnerName, results, onclick, onchange, onkeyup}) => {
  
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
    		onclick={onclick}
    		onchange={onchange}
    		onkeyup={onkeyup}
    		/>
    	<ResultsTable data={results}/>
    </div>
  );
}

RunnerSearchForm.propTypes = {
  runnerName: PropTypes.string.isRequired,
  results: PropTypes.array,
  onclick: PropTypes.func.isRequired,
  onchange: PropTypes.func.isRequired,
  onkeyup: PropTypes.func.isRequired
}

export default RunnerSearch;


