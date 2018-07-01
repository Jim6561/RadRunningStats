import React from 'react';
import PropTypes from 'prop-types';
import ResultsTable from './ResultsTable';

const SingleRace = ({raceId, showLocations, results, onSortTable, onShowLocationChange

}) => {
  console.log(raceId);
  return (
    <div>
      Selected a race!
      <ResultsTable data={results} onSortTable={onSortTable} showLocations={showLocations}/>
    </div>
  );
}

SingleRace.propTypes = {
	raceId: PropTypes.number, //maybe not required at all 
	results: PropTypes.array.isRequired, 
	onSortTable: PropTypes.func.isRequired, 
	showLocations: PropTypes.bool.isRequired
}

export default SingleRace;
