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
    header: 'First Quartile Time',
    dataProp: 'first_quartile_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'all_times'
  }, {
    header: 'Median Time',
    dataProp: 'median_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'median_time'
  }, {
    header: 'Third Quartile Time',
    dataProp: 'third_quartile_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'all_times'
  }, {
    header: 'Slowest Time',
    dataProp: 'last_time',
    render: (data) => {return <TimeValue value={data}/>},
    group: 'all_times'
  }
];

const RacesTable = ({data, showLocations, showWinningTime, showMedianTime, showAllTimes, onSortTable}) => {
  let actualColumns = columns;
  actualColumns = doUpdateColumnGroup(actualColumns, 'location', showLocations);
  actualColumns = doUpdateColumnGroup(actualColumns, 'winning_time', showWinningTime || showAllTimes);
  actualColumns = doUpdateColumnGroup(actualColumns, 'median_time', showMedianTime || showAllTimes);
  actualColumns = doUpdateColumnGroup(actualColumns, 'all_times', showAllTimes);
  return (
    <AwesomeTable data={data} columns={actualColumns} onSortTable={onSortTable}/>
  );
}

RacesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RacesTable;


