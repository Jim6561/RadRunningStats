import React from 'react';
import PropTypes from 'prop-types';
import RacesTable from './RacesTable';
import CheckBox from './CheckBox';

const RacesPage = ({
  data, 
  showLocations, 
  showWinningTime, 
  showMedianTime, 
  showAllTimes,
  showPaces,
  onSortTable, 
  onShowLocationChange, 
  onShowWinningTimeChange, 
  onShowMedianTimeChange,
  onShowAllTimesChange,
  onShowPacesChange,
  onSingleRaceClicked
}) => {
  return (
    <div>
      <span>
        <CheckBox label='Locations' checked={showLocations} onChange={onShowLocationChange}/>
        <CheckBox label='Winning Time' checked={showWinningTime} onChange={onShowWinningTimeChange}/>
        <CheckBox label='Median Time' checked={showMedianTime} onChange={onShowMedianTimeChange}/>
        <CheckBox label='All Times' checked={showAllTimes} onChange={onShowAllTimesChange}/>
        <CheckBox label='Pace' checked={showPaces} onChange={onShowPacesChange}/>
      </span>  
      <RacesTable
        data={data}
        showLocations={showLocations}
        showWinningTime={showWinningTime}
        showMedianTime={showMedianTime}
        showAllTimes={showAllTimes}
        showPaces={showPaces}
        onSortTable={onSortTable}
        onSingleRaceClicked={onSingleRaceClicked}
      />
    </div>
  );
}

RacesPage.propTypes = {
  data: PropTypes.array.isRequired,
  showLocations: PropTypes.bool.isRequired,
  showWinningTime: PropTypes.bool.isRequired,
  showMedianTime: PropTypes.bool.isRequired,
  showAllTimes: PropTypes.bool.isRequired,
  showPaces: PropTypes.bool.isRequired,
  onSortTable: PropTypes.func.isRequired,
  onShowLocationChange: PropTypes.func.isRequired,
  onShowWinningTimeChange: PropTypes.func.isRequired,
  onShowMedianTimeChange: PropTypes.func.isRequired,
  onShowAllTimesChange: PropTypes.func.isRequired,
  onShowPacesChange: PropTypes.func.isRequired,
  onSingleRaceClicked: PropTypes.func.isRequired
}

export default RacesPage;


