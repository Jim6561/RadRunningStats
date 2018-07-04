import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class TableRow extends React.Component {
	constructor(props) {
    	super(props);
    	this.handleRowClick = this.handleRowClick.bind(this);
 	}

	handleRowClick(whichRow) {
		if (this.props.onRowClicked) {
			this.props.onRowClicked(this.props.rowdata);
		}
	}

	render() {
		let className = classNames({
			'dataRow': true,
			'clickable': this.props.onRowClicked !== undefined
		});
		return (
			<tr className={className} onClick={this.handleRowClick}>
				{this.props.columns.map((column, i) => 
					<td key={i}>{column.render ? column.render(this.props.rowdata[column.dataProp]) : this.props.rowdata[column.dataProp]}</td>
				)}
			</tr>
		);
	}
}

TableRow.propTypes = {
  rowdata: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClicked: PropTypes.func
}

export default TableRow;