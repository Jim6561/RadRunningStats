import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
 
const AwesomeTable = ({data, columns}) => {
  return (
    <table className='awesomeTable'>
      <thead>
        <tr>
          {columns.map((column, i) => 
            <td key={i}>{column.header}</td>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((record, i) => 
            <TableRow key={i} rowdata={record} columns={columns}/>
        )}
      </tbody>
    </table>
  );
}

AwesomeTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired
}

export default AwesomeTable;


