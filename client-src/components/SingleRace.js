import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import ResultsTable from './ResultsTable';

const SingleRace = ({raceId, raceName, distance, eventDate, showLocations, results, onSortTable, onShowLocationChange
}) => {
  return (
    <div>
      <h2>{raceName}</h2>
      <span>{(new Date(eventDate).toLocaleDateString())}</span>
      <span>Distance {distance}</span>
      <CheckBox
        label='Show Locations'
        checked={showLocations}
        onChange={onShowLocationChange}/>
      <ResultsTable data={results} onSortTable={onSortTable} showLocations={showLocations} showRace={false}/>
    </div>
  );
}

SingleRace.propTypes = {
	raceName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
	results: PropTypes.array.isRequired, 
	onSortTable: PropTypes.func.isRequired, 
  onShowLocationChange: PropTypes.func.isRequired,
  showLocations: PropTypes.bool.isRequired
}

export default SingleRace;
