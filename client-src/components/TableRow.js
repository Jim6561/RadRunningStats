import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
class TableRow extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.rowdata.race_name}</td>
        <td>{this.props.rowdata.distance}</td>
        <td>{new Date(this.props.rowdata.event_date).toLocaleDateString()}</td>
        <td>{this.props.rowdata.name}</td>
        <td>{this.props.rowdata.sex}</td>
        <td>{this.props.rowdata.age}</td>
        <td>{this.props.rowdata.city}</td>
        <td>{this.props.rowdata.state}</td>
        <td>{this.props.rowdata.place}</td>
        <td>{this.props.rowdata.div_tot}</td>
        <td>{this.props.rowdata.div}</td>
        <td>{this.props.rowdata.bib_number}</td>
        <td><TimeValue value={this.props.rowdata.net_time}/></td>
        <td><TimeValue value={this.props.rowdata.gun_time}/></td>
        <td><TimeValue value={this.props.rowdata.split_time}/></td>
        <td><TimeValue value={this.props.rowdata.pace}/></td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  rowdata: PropTypes.object.isRequired
}

export default TableRow;