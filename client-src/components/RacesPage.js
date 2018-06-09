import React from 'react';
import PropTypes from 'prop-types';
import RacesTable from './RacesTable';
import CheckBox from './CheckBox';

const RacesPage = ({
  data, 
  showLocations, 
  showWinningTime, 
  showMedianTime, 
  onSortTable, 
  onShowLocationChange, 
  onShowWinningTimeChange, 
  onShowMedianTimeChange
}) => {
  return (
    <div>
      <span>
        <CheckBox label='Show Locations' checked={showLocations} onChange={onShowLocationChange}/>
        <CheckBox label='Show Winning Time' checked={showWinningTime} onChange={onShowWinningTimeChange}/>
        <CheckBox label='Show Median Time' checked={showMedianTime} onChange={onShowMedianTimeChange}/>
      </span>  
      <RacesTable
        data={data}
        showLocations={showLocations}
        showWinningTime={showWinningTime}
        showMedianTime={showMedianTime}
        onSortTable={onSortTable}
      />
    </div>
  );
}

RacesPage.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RacesPage;


