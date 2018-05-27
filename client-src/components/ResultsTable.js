import React from 'react';
import PropTypes from 'prop-types';
import AwesomeTable from './AwesomeTable';
import TimeValue from './TimeValue';

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
    header: 'Name',
    dataProp: 'name'
  }, {
    header: 'Sex',
    dataProp: 'sex'
  }, {
    header: 'Age',
    dataProp: 'age'
  }, {
    header: 'City',
    dataProp: 'city'
  }, {
    header: 'State',
    dataProp: 'state'
  }, {
    header: 'Place',
    dataProp: 'place'
  }, {
    header: 'Div/Tot',
    dataProp: 'div_tot'
  }, {
    header: 'Div',
    dataProp: 'div'
  }, {
    header: 'Bib number',
    dataProp: 'bib_number'
  }, {
    header: 'Net',
    dataProp: 'net_time',
    render: (data) => {return <TimeValue value={data}/>}
  }, {
    header: 'Gun',
    dataProp: 'gun_time',
    render: (data) => {return <TimeValue value={data}/>}
  }, {
    header: 'Split',
    dataProp: 'split_time',
    render: (data) => {return <TimeValue value={data}/>}
  }, {
    header: 'Pace',
    dataProp: 'pace',
    render: (data) => {return <TimeValue value={data}/>}
  }
];

const ResultsTable = ({data, onSortTable}) => {
  return (
    <AwesomeTable data={data} columns={columns} onSortTable={onSortTable}/>
  );
}

ResultsTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired
}

export default ResultsTable;


