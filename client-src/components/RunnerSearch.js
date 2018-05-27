import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import ResultsTable from '../components/ResultsTable';
 
const RunnerSearch = ({runnerName, results, onClick, onChange, onKeyup, onSortTable}) => {
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
    		onClick={onClick}
    		onChange={onChange}
    		onKeyup={onKeyup}
    		/>
    	<ResultsTable data={results} onSortTable={onSortTable}/>
    </div>
  );
}

RunnerSearch.propTypes = {
  runnerName: PropTypes.string.isRequired,
  results: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyup: PropTypes.func.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RunnerSearch;


