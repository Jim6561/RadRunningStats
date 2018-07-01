import * as actions from '../actions/actions'
import { sortTable, makeTable } from './sortTable'
import { combineReducers } from 'redux'

function raceId(state = null, action) {
	switch (action.type) {
		case actions.SINGLE_RACE_CLICKED:
			console.log('setting selected race: ' + action.raceId);
			return action.raceId;
	   	default:
	     	return state;
	}
}


function tableReducer(state = makeTable(), action) {
	switch (action.type) {
		case actions.RECEIVE_SELECTED_RACE_SUCCESS:
			console.log('Receiving results');
			return makeTable(action.records);
	    case actions.RECEIVE_SELECTED_RESULTS_FAILED:
	    	console.log('Receiving results failed');
	    	return makeTable([]);
	    case actions.SINGLE_RACE_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
	   	default:
	     	return state;
	}
}


function showLocations(state = false, action) {
	switch (action.type) {
		case actions.SINGLE_RACE_TABLE_LOCATIONS_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

const selectedRace = combineReducers({
	raceId: raceId,
	table: tableReducer,
	showLocations: showLocations
});

export default selectedRace;