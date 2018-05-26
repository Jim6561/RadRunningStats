import React from 'react';
import PropTypes from 'prop-types';
import RacesRow from './RacesRow';
 
const RacesTable = ({data}) => {
  return (
    <table className='resultsTable'>
      <thead>
        <tr>
          <td>Race</td>
          <td>Distance</td>
          <td>Date</td>
          <td>Finishers</td>
          <td>Winning Time</td>
          <td>Median Time</td>
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => 
            <RacesRow key={i} rowdata={record}/>
        )}
      </tbody>
    </table>
  );
}

RacesTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default RacesTable;


