import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
const RacesRow = ({rowdata}) => {
  return (
    <tr className='dataRow'>
      <td>{rowdata.race_name}</td>
      <td>{rowdata.distance}</td>
      <td>{new Date(rowdata.event_date).toLocaleDateString()}</td>
      <td>{rowdata.finishers}</td>
      <td><TimeValue value={rowdata.winning_time}/></td>
      <td><TimeValue value={rowdata.median_time}/></td>
    </tr>
  );
}

RacesRow.propTypes = {
  rowdata: PropTypes.object.isRequired
}

export default RacesRow;