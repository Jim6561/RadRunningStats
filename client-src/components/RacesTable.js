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
    render: (data) => {return <TimeValue value={data}/>}
  }, {
    header: 'Median Time',
    dataProp: 'median_time',
    render: (data) => {return <TimeValue value={data}/>}
  }
];

const RacesTable = ({data, showLocations, onSortTable}) => {
  let actualColumns = doUpdateColumnGroup(columns, 'location', showLocations);
  return (
    <AwesomeTable data={data} columns={actualColumns} onSortTable={onSortTable}/>
  );
}

RacesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default RacesTable;


