import React from 'react';
import PropTypes from 'prop-types';
import RacesTable from './RacesTable';
import CheckBox from './CheckBox';

const RacesPage = ({data, showLocations, onSortTable, onShowLocationChange}) => {
  return (
    <div>
      <CheckBox
        label='Show Locations'
        checked={showLocations}
        onChange={onShowLocationChange}/>
      <RacesTable data={data} showLocations={showLocations} onSortTable={onSortTable}/>
    </div>
  );
}

RacesPage.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RacesPage;


