import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import ResultsTable from '../components/ResultsTable';
import CheckBox from '../components/CheckBox';
 
const RunnerSearch = ({runnerName, results, onClick, onNameChange, onKeyup, onSortTable, showLocations, onShowLocationChange}) => {
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
    		onClick={onClick}
    		onChange={onNameChange}
    		onKeyup={onKeyup}
    		/>
      <CheckBox
        label='Show Locations'
        checked={showLocations}
        onChange={onShowLocationChange}/>
    	<ResultsTable data={results} onSortTable={onSortTable}/>
    </div>
  );
}

RunnerSearch.propTypes = {
  runnerName: PropTypes.string.isRequired,
  results: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onKeyup: PropTypes.func.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RunnerSearch;


