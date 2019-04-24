import React from 'react';
import PropTypes from 'prop-types';
import AwesomeTable from './AwesomeTable';
import TimeValue from './TimeValue';
import { doUpdateColumnGroup } from '../helpers/TableHelper'

const columns = [
  {
    header: 'Race',
    dataProp: 'race_name',
    groups: ['race']
  }, {
    header: 'Distance',
    dataProp: 'distance',
    groups: ['race']
  }, {
    header: 'Date',
    dataProp: 'event_date',
    render: (data) => {return new Date(data).toLocaleDateString()},
    groups: ['race']
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
    dataProp: 'city',
    groups: ['location']
  }, {
    header: 'State',
    dataProp: 'state',
    groups: ['location']
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

const ResultsTable = ({data, onSortTable, showLocations, showRace, onResultSelected}) => {
  let actualColumns = doUpdateColumnGroup(columns, 'location', showLocations);
  actualColumns = doUpdateColumnGroup(actualColumns, 'race', showRace)
  return (
    <AwesomeTable data={data} columns={actualColumns} onSortTable={onSortTable} onRowClicked={onResultSelected}/>
  );
}

ResultsTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired,
  showLocations: PropTypes.bool.isRequired,
  showRace: PropTypes.bool.isRequired,
  onResultSelected: PropTypes.func
}

export default ResultsTable;


