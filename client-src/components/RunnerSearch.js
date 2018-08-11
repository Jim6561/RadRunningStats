import React from 'react';
import PropTypes from 'prop-types';
import RunnerSearchForm from '../components/RunnerSearchForm';
import ResultsTable from '../components/ResultsTable';
import CheckBox from '../components/CheckBox';
 
const RunnerSearch = ({runnerName, runnerBib, results, showLocations, onSearchClick, onNameChange, onBibChange, onKeyup, onSortTable, onShowLocationChange}) => {
  return (
    <div>
    	<RunnerSearchForm
    		runnerName={runnerName}
        runnerBib={runnerBib}
    		onSearchClick={onSearchClick}
    		onNameChange={onNameChange}
        onBibChange={onBibChange}
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
  runnerBib: PropTypes.string.isRequired,
  results: PropTypes.array,
  showLocations: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onBibChange: PropTypes.func.isRequired,
  onKeyup: PropTypes.func.isRequired,
  onSortTable: PropTypes.func.isRequired,
  onShowLocationChange: PropTypes.func.isRequired
}

export default RunnerSearch;


