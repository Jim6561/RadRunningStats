import * as actions from '../actions/actions'
import { sortTable, makeTable } from './sortTable'
import { combineReducers } from 'redux'

function raceId(state = null, action) {
	switch (action.type) {
		case actions.SINGLE_RACE_CLICKED:
			return action.raceId;
		case actions.RETURN_TO_RACES_CLICKED:
			return null;
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

function divisions(state = [], action) {
	switch (action.type) {
		case actions.RECEIVE_SELECTED_RACE_SUCCESS:
			let rawDivisions = new Set();
			action.records.map((row) =>{
				if (row.div && row.div.length > 0) {
					rawDivisions.add(row.div);
				}
			});
			rawDivisions = Array.from(rawDivisions).sort();
			rawDivisions.unshift('Everyone')
			return rawDivisions;
		default:
	     	return state;
	}
}

function selectedDivision(state = null, action) {
	switch (action.type) {
		case actions.DIVISION_SELECTED:
			console.log('selected: ' + action.division);
			return action.division;
		default:
			return state;
	}
}


const selectedRace = combineReducers({
	raceId: raceId,
	raceDetails: raceDetails,
	table: tableReducer,
	showLocations: showLocations,
	divisions: divisions,
	selectedDivision: selectedDivision
});

export default selectedRace;