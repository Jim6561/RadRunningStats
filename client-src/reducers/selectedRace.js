import stats from 'statsjs';

import * as actions from '../actions/actions'
import { sortTable, makeTable, filter } from './sortTable'
import { combineReducers } from 'redux'

const DIV_EVERYONE = 'Everyone';
const DIV_OTHER = 'Other';


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
		case actions.SINGLE_RACE_CLICKED:
			return makeTable([]);
		case actions.RECEIVE_SELECTED_RACE_SUCCESS:
			return makeTable(action.records);
	    case actions.RECEIVE_SELECTED_RESULTS_FAILED:
	    	return makeTable([]);
	    case actions.SINGLE_RACE_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
	    case actions.DIVISION_SELECTED:
	    	return filter(state, 'div', action.division);
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
				} else {
					rawDivisions.add(DIV_OTHER);
				}
			});

			rawDivisions = Array.from(rawDivisions).sort();
			rawDivisions.unshift(DIV_EVERYONE)
			return rawDivisions;
		default:
	     	return state;
	}
}

function selectedDivision(state = null, action) {
	switch (action.type) {
		case actions.DIVISION_SELECTED:
			return action.division;
		default:
			return state;
	}
}

function quartiles(state = {}, action) {
	switch (action.type) {
		case actions.CALCULATE_SELECTED_RACE_STATS:
			let times = [];
			action.records.map(e => {times.push(e.gun_time)});
			var timeStats = stats(times);
	    
			return {
				min: timeStats.min(),
				q1: timeStats.q1(),
				median: timeStats.median(),
				q3: timeStats.q3(),
				max: timeStats.max(),
			};
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
	selectedDivision: selectedDivision,
	quartiles: quartiles
});

export default selectedRace;