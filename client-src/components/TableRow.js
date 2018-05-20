import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
const TableRow = ({rowdata}) => {
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
      <td>{rowdata.place}</td>
      <td>{rowdata.div_tot}</td>
      <td>{rowdata.div}</td>
      <td>{rowdata.bib_number}</td>
      <td><TimeValue value={rowdata.net_time}/></td>
      <td><TimeValue value={rowdata.gun_time}/></td>
      <td><TimeValue value={rowdata.split_time}/></td>
      <td><TimeValue value={rowdata.pace}/></td>
    </tr>
  );
}

TableRow.propTypes = {
  rowdata: PropTypes.object.isRequired
}

export default TableRow;