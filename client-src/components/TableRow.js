import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({rowdata, columns}) => {
  return (
    <tr className='dataRow'>
      {columns.map((column, i) => 
        <td key={i}>{column.render ? column.render(rowdata[column.dataProp]) : rowdata[column.dataProp]}</td>
      )}
    </tr>
  );
}

TableRow.propTypes = {
  rowdata: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
}

export default TableRow;