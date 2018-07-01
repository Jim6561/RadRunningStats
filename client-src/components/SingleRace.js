import React from 'react';
import PropTypes from 'prop-types';
import ResultsTable from './ResultsTable';

const RacesPage = ({raceId, showLocations, results, onSortTable, onShowLocationChange

}) => {
  console.log(raceId);
  return (
    <div>
      Selected a race!
      <ResultsTable data={results} onSortTable={onSortTable} showLocations={showLocations}/>
    </div>
  );
}

RacesPage.propTypes = {
	
}

export default RacesPage;
