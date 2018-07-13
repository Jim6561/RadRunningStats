import React from 'react';
import PropTypes from 'prop-types';
import AwesomeTable from './AwesomeTable';
import TimeValue from './TimeValue';
import CheckBox from './CheckBox';
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
    groups: ['location']
  }, {
    header: 'Finishers',
    dataProp: 'finishers'
  }, {
    header: 'Winning Time',
    dataProp: 'winning_time',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['winning_time', 'time']
  }, {
    header: 'First Quartile Time',
    dataProp: 'first_quartile_time',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'time']
  }, {
    header: 'Median Time',
    dataProp: 'median_time',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['median_time', 'time']
  }, {
    header: 'Third Quartile Time',
    dataProp: 'third_quartile_time',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'time']
  }, {
    header: 'Slowest Time',
    dataProp: 'last_time',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'time']
  }, {
    header: 'Winning Pace',
    dataProp: 'winning_pace',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['winning_time', 'pace']
  }, {
    header: 'First Quartile Pace',
    dataProp: 'first_quartile_pace',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'pace']
  }, {
    header: 'Median Pace',
    dataProp: 'median_pace',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['median_time', 'pace']
  }, {
    header: 'Third Quartile Pace',
    dataProp: 'third_quartile_pace',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'pace']
  }, {
    header: 'Slowest Pace',
    dataProp: 'slowest_pace',
    render: (data) => {return <TimeValue value={data}/>},
    groups: ['all_times', 'pace']
  }
];

const RacesTable = ({
  data, 
  showLocations, showWinningTime, showMedianTime, showAllTimes, showPaces, 
  onSortTable, onSingleRaceClicked, onShowLocationChange, onShowWinningTimeChange, onShowMedianTimeChange, onShowAllTimesChange, onShowPacesChange}) => {
  let actualColumns = columns;
  actualColumns = doUpdateColumnGroup(actualColumns, 'location', showLocations);
  actualColumns = doUpdateColumnGroup(actualColumns, 'winning_time', showWinningTime || showAllTimes);
  actualColumns = doUpdateColumnGroup(actualColumns, 'median_time', showMedianTime || showAllTimes);
  actualColumns = doUpdateColumnGroup(actualColumns, 'all_times', showAllTimes);
  actualColumns = doUpdateColumnGroup(actualColumns, 'pace', showPaces);
  actualColumns = doUpdateColumnGroup(actualColumns, 'time', !showPaces);
  return (
    <div>
      <span>
        <CheckBox label='Locations' checked={showLocations} onChange={onShowLocationChange}/>
        <CheckBox label='Winning Time' checked={showWinningTime} onChange={onShowWinningTimeChange}/>
        <CheckBox label='Median Time' checked={showMedianTime} onChange={onShowMedianTimeChange}/>
        <CheckBox label='All Times' checked={showAllTimes} onChange={onShowAllTimesChange}/>
        <CheckBox label='Pace' checked={showPaces} onChange={onShowPacesChange}/>
      </span>  
      <AwesomeTable data={data} columns={actualColumns} onSortTable={onSortTable} onRowClicked={onSingleRaceClicked}/>
    </div>
  );
}

RacesTable.propTypes = {
  data: PropTypes.array.isRequired,
  onSortTable: PropTypes.func.isRequired,
  showLocations: PropTypes.bool.isRequired,
  showWinningTime: PropTypes.bool.isRequired,
  showMedianTime: PropTypes.bool.isRequired,
  showAllTimes: PropTypes.bool.isRequired,
  showPaces: PropTypes.bool.isRequired,
  onSingleRaceClicked: PropTypes.func.isRequired,
  onShowLocationChange: PropTypes.func.isRequired,
  onShowWinningTimeChange: PropTypes.func.isRequired,
  onShowMedianTimeChange: PropTypes.func.isRequired,
  onShowAllTimesChange: PropTypes.func.isRequired,
  onShowPacesChange: PropTypes.func.isRequired
}

export default RacesTable;
