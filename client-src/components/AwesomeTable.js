import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
 
const AwesomeTable = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Race</td>
          <td>Distance</td>
          <td>Date</td>
          <td>Name</td>
          <td>Sex</td>
          <td>Age</td>
          <td>City</td>
          <td>State</td>
          <td>Place</td>
          <td>Div/Tot</td>
          <td>Div</td>
          <td>Bib number</td>
          <td>Net</td>
          <td>Gun</td>
          <td>Split</td>
          <td>Pace</td>
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => 
            <TableRow key={i} rowdata={record}/>
        )}
      </tbody>
    </table>
  );
}

AwesomeTable.propTypes = {
  data: PropTypes.array.isRequired
}

export default AwesomeTable;


