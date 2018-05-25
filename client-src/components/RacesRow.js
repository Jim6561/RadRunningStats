import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
const RacesRow = ({rowdata}) => {
  return (
    <tr className='dataRow'>
      <td>{rowdata.race_name}</td>
      <td>{rowdata.distance}</td>
      <td>{new Date(rowdata.event_date).toLocaleDateString()}</td>
      <td>{rowdata.name}</td>
      <td>{rowdata.sex}</td>
      <td>{rowdata.age}</td>
      <td>{rowdata.city}</td>
      <td>{rowdata.state}</td>
    </tr>
  );
}

RacesRow.propTypes = {
  rowdata: PropTypes.object.isRequired
}

export default RacesRow;