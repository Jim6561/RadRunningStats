import * as actions from '../actions/actions'
import { sortTable, makeTable } from './sortTable'
import { combineReducers } from 'redux'

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

function showLocations(state = true, action) {
	switch (action.type) {
		case actions.SHOW_RESULT_LOCATIONS_CLICKED:
	    	return {
	    		showLocations: !state
	    	};
	    default:
	     	return state;
	}
}

const results = combineReducers({
	table: tableReducer,
	showLocations: showLocations
});

export default results;