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

const races = combineReducers({
	table: tableReducer
	//showLocations: showLocations
});

export default races;