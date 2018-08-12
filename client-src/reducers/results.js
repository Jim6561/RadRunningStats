import * as actions from '../actions/actions'
import { sortTable, makeTable } from './sortTable'
import { combineReducers } from 'redux'

function runnerName(state = '', action) {
	switch (action.type) {
	    case actions.SEARCH_FORM_NAME_CHANGED:
	    	return action.event.target.value;
	    default:
	     	return state;
 	}
}

function runnerBib(state = '', action) {
	switch (action.type) {
	    case actions.SEARCH_FORM_BIB_CHANGED:
	    	return action.event.target.value;
	    default:
	     	return state;
 	}
}

function tableReducer(state = makeTable(), action) {
	switch (action.type) {
		case actions.RECEIVE_RESULTS_SUCCESS:
			return makeTable(action.records);
	    case actions.RECEIVE_RESULTS_FAILED:
	    	return makeTable([]);
	    case actions.RESULTS_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
	   	default:
	     	return state;
	}
}

function showLocations(state = false, action) {
	switch (action.type) {
		case actions.SHOW_RESULT_LOCATIONS_CLICKED:
	    	return !state;
	    default:
	     	return state;
	}
}

const results = combineReducers({
	runnerName: runnerName,
	runnerBib: runnerBib,
	table: tableReducer,
	showLocations: showLocations
});

export default results;