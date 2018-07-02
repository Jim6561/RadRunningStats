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

function raceDetails(state = null, action) {
	switch (action.type) {
		case actions.SINGLE_RACE_CLICKED:
			return {
				...state,
				distance: action.distance,
				raceName: action.raceName,
				eventDate: action.eventDate,
			};
	   	default:
	     	return state;
	}
}

function tableReducer(state = makeTable(), action) {
	switch (action.type) {
		case actions.RECEIVE_SELECTED_RACE_SUCCESS:
			return makeTable(action.records);
	    case actions.RECEIVE_SELECTED_RESULTS_FAILED:
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
	raceDetails: raceDetails,
	table: tableReducer,
	showLocations: showLocations
});

export default selectedRace;