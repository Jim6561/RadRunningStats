import * as actions from '../actions/actions'
import { combineReducers } from 'redux'
import { sortTable, makeTable } from './sortTable'

function tableReducer(state = makeTable(), action) {
	switch (action.type) {
		case actions.RECEIVE_RACES_SUCCESS:
			return makeTable(action.records);
	    case actions.RECEIVE_RACES_FAILED:
	    	return makeTable([]);
	    case actions.RACES_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
	   	default:
	     	return state;
	}
}

function showLocations(state = false, action) {
	switch (action.type) {
		case actions.SHOW_RACE_LOCATIONS_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

function showWinningTime(state = true, action) {
	switch (action.type) {
		case actions.SHOW_WINNING_TIME_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

function showMedianTime(state = true, action) {
	switch (action.type) {
		case actions.SHOW_MEDIAN_TIME_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

function showAllTimes(state = false, action) {
	switch (action.type) {
		case actions.SHOW_ALL_RACE_TIMES_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

const races = combineReducers({
	table: tableReducer,
	showLocations: showLocations,
	showWinningTime: showWinningTime,
	showMedianTime: showMedianTime,
	showAllTimes: showAllTimes
});

export default races;