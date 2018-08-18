import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
const RaceStats = ({quartiles}) => {

	return (
		<table className='statsBox'>
			<thead>
				<tr>
					<th>Fastest</th>
					<th>First quartile</th>
					<th>Medium</th>
					<th>Third quartile</th>
					<th>Slowest</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><TimeValue value={quartiles.min}/></td>
					<td><TimeValue value={quartiles.q1}/></td>
					<td><TimeValue value={quartiles.median}/></td>
					<td><TimeValue value={quartiles.q3}/></td>
					<td><TimeValue value={quartiles.max}/></td>
				</tr>
			</tbody>
		</table>
	);
}


RaceStats.propTypes = {
  quartiles: PropTypes.object.isRequired
}

export default RaceStats;


