import React from 'react';
import PropTypes from 'prop-types';
import AwesomeTable from './AwesomeTable';
import TimeValue from './TimeValue';
import { doUpdateColumnGroup } from '../helpers/TableHelper'
 
const columns = [
  {
    header: 'Race',
    dataProp: 'race_name'
  }, {
    header: 'Distance',
    dataProp: 'distance'
  }, {
    header: 'Date',
    dataProp: 'event_date',
    render: (data) => {return new Date(data).toLocaleDateString()}
  }, {
    header: 'Location',
    dataProp: 'location',
    group: 'location'
  }, {
    header: 'Finishers',
    dataProp: 'finishers'
  }, {
    header: 'Winning Time',
    dataProp: 'winning_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'winning_time'
  }, {
    header: 'Median Time',
    dataProp: 'median_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'median_time'
  }
];

const RacesTable = ({data, showLocations, showWinningTime, showMedianTime, onSortTable}) => {
  let actualColumns = doUpdateColumnGroup(columns, 'location', showLocations);
  actualColumns = doUpdateColumnGroup(actualColumns, 'winning_time', showWinningTime);
  actualColumns = doUpdateColumnGroup(actualColumns, 'median_time', showMedianTime);
  return (
    <AwesomeTable data={data} columns={actualColumns} onSortTable={onSortTable}/>
  );
}

RacesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RacesTable;


