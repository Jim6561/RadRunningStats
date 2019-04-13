import stats from 'statsjs';

import * as actions from '../actions/actions'
import { sortTable, makeTable, filter, selectRow } from './sortTable'
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
	    case actions.RUNNER_RESULT_SELECTED:
	    	return selectRow(state, action.rowIndex);
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

const extractTimes = (inputRows) => {
	let retval = [];
	inputRows.map(e => {
		if (e.gun_time) {
			retval.push(e.gun_time)
		}
	});
	return retval;
};

function quartiles(state = {filtered: false}, action) {
	switch (action.type) {
		case actions.CALCULATE_SELECTED_RACE_STATS:
			let times = extractTimes(action.allResults);
			let selectedTimes = extractTimes(action.visibleResults);


			var timeStats = stats(times);
			var selectedTimeStats = stats(selectedTimes);
			return {
				...state,
				selected: {
					min: selectedTimeStats.min(),
					q1: selectedTimeStats.q1(),
					median: selectedTimeStats.median(),
					q3: selectedTimeStats.q3(),
					max: selectedTimeStats.max()
				},
				complete: {
					min: timeStats.min(),
					q1: timeStats.q1(),
					median: timeStats.median(),
					q3: timeStats.q3(),
					max: timeStats.max()
				}
			};
		case actions.DIVISION_SELECTED:
			return {
				...state, 
				filtered: action.division !== DIV_EVERYONE
			};
		case actions.SINGLE_RACE_CLICKED:
			return {
				filtered: false
			}
		case actions.RUNNER_RESULT_SELECTED:
			return {
				...state,
				selectedTime: action.record.gun_time
			}
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