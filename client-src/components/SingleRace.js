import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import ResultsTable from './ResultsTable';

const SingleRace = ({raceId, showLocations, results, onSortTable, onShowLocationChange

}) => {
  console.log(raceId);
  return (
    <div>
      Selected a race!
      <CheckBox
        label='Show Locations'
        checked={showLocations}
        onChange={onShowLocationChange}/>
      <ResultsTable data={results} onSortTable={onSortTable} showLocations={showLocations}/>
    </div>
  );
}

SingleRace.propTypes = {
	raceId: PropTypes.number, //maybe not required at all 
	results: PropTypes.array.isRequired, 
	onSortTable: PropTypes.func.isRequired, 
  onShowLocationChange: PropTypes.func.isRequired,
  showLocations: PropTypes.bool.isRequired
}

export default SingleRace;
