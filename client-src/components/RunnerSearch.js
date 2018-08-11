import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import ResultsTable from '../components/ResultsTable';
import CheckBox from '../components/CheckBox';
 
const RunnerSearch = ({runnerName, results, showLocations, onSearchClick, onNameChange, onKeyup, onSortTable, onShowLocationChange}) => {
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
    		onSearchClick={onSearchClick}
    		onChange={onNameChange}
    		onKeyup={onKeyup}
    		/>
      <CheckBox
        label='Show Locations'
        checked={showLocations}
        onChange={onShowLocationChange}/>
    	<ResultsTable data={results} onSortTable={onSortTable} showLocations={showLocations} showRace={true}/>
    </div>
  );
}

RunnerSearch.propTypes = {
  runnerName: PropTypes.string.isRequired,
  results: PropTypes.array,
  showLocations: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onKeyup: PropTypes.func.isRequired,
  onSortTable: PropTypes.func.isRequired,
  onShowLocationChange: PropTypes.func.isRequired
}

export default RunnerSearch;


