import React from 'react';
import PropTypes from 'prop-types';
import RacesTableHolder from '../containers/RacesTableHolder';
import SingleRace from './SingleRace';

const RacesPage = ({selectedRaceId

}) => {
  return (
    <div>
      {selectedRaceId === null && <RacesTableHolder/>}
      {selectedRaceId !== null && <SingleRace raceId={selectedRaceId}/>}
    </div>
  );
}

RacesPage.propTypes = {

}

export default RacesPage;
