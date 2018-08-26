import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class AwesomeTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  handleSortClick(whichColumn) {
      this.props.onSortTable(whichColumn.dataProp);
  }

  handleRowClick(record, rowIndex) {
    this.props.onRowClicked(record, rowIndex);
  }

  render() {
    return (
      <table className='awesomeTable'>
        <thead>
          <tr>
            {this.props.columns.map((column, i) => 
              <td
                className='sortableHeader'
                key={i}
                onClick={(e) => this.handleSortClick(column)}
              >{column.header}</td>
            )}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((record, i) => 
              <TableRow key={i} rowdata={record} columns={this.props.columns} onRowClicked={(e) => this.handleRowClick(e, i)} />
          )}
        </tbody>
      </table>
    );
  }
}

AwesomeTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired,
  onRowClicked: PropTypes.func
}

export default AwesomeTable;


