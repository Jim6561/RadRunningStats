import React from 'react';
import PropTypes from 'prop-types';
import TimeValue from './TimeValue';
 
const RaceStats = ({quartiles}) => {
	return (
		<table className='statsBox'>
			<thead>
				<tr>
					<th></th>
					<th>Fastest</th>
					<th>First quartile</th>
					<th>Medium</th>
					<th>Third quartile</th>
					<th>Slowest</th>
				</tr>
			</thead>
			<tbody>
				{quartiles.selected && 
					<tr>
						<td>Overall</td>
						<td><TimeValue value={quartiles.complete.min}/></td>
						<td><TimeValue value={quartiles.complete.q1}/></td>
						<td><TimeValue value={quartiles.complete.median}/></td>
						<td><TimeValue value={quartiles.complete.q3}/></td>
						<td><TimeValue value={quartiles.complete.max}/></td>
					</tr>
				}
				{quartiles.selected && 
					<tr>
						<td>Selected data</td>
						<td><TimeValue value={quartiles.selected.min}/></td>
						<td><TimeValue value={quartiles.selected.q1}/></td>
						<td><TimeValue value={quartiles.selected.median}/></td>
						<td><TimeValue value={quartiles.selected.q3}/></td>
						<td><TimeValue value={quartiles.selected.max}/></td>
					</tr>
				}
			</tbody>
		</table>
	);
}


RaceStats.propTypes = {
  quartiles: PropTypes.object.isRequired
}

export default RaceStats;


