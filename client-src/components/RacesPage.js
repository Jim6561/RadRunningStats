import React from 'react';
import PropTypes from 'prop-types';
import RacesTableHolder from '../containers/RacesTableHolder';
import SingleRaceHolder from '../containers/SingleRaceHolder';

const RacesPage = ({selectedRaceId

}) => {
  return (
    <div>
      {selectedRaceId === null && <RacesTableHolder/>}
      {selectedRaceId !== null && <SingleRaceHolder/>}
    </div>
  );
}

RacesPage.propTypes = {

}

export default RacesPage;
