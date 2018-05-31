import * as actions from '../actions/actions'
import arraySort from 'array-sort'
import { combineReducers } from 'redux'


//Make these sensible constants somehow.
//And the ones on HeaderBar
//Also, change to use that spreader thing
const RESULTS_PAGE = 'RESULTS_PAGE';
const RACES_PAGE = 'RACES_PAGE';

const initialState = {
	selectedPage: RACES_PAGE,
	runnerName: '',
	results: [],
	races: []
};

function sortTable(data, column) {
	//Sort on the numeric value behind the text
	if (column === 'distance') {
		column = 'distance_miles';
	}
	arraySort(data, column);

	return data;
}


function resultsReducer(state = [], action) {
	switch (action.type) {
		case actions.RECEIVE_RESULTS_SUCCESS:
			return action.records;
	    case actions.RECEIVE_RESULTS_FAILED:
	    	return [];
	    case actions.RESULTS_TABLE_SORT_CLICKED:
	    	return sortTable(state.slice(0), action.column);
	    default:
	     	return state;
	}
}

function racesReducer(state = [], action) {
	switch (action.type) {
		case actions.RECEIVE_RACES_SUCCESS:
	    	return action.records;
		case actions.RECEIVE_RACES_FAILED:
	    	return [];
	     case actions.RACES_TABLE_SORT_CLICKED:
	    	return sortTable(state.slice(0), action.column);
	    default:
	     	return state;
	}
}

function runnerNameReducer(state = '', action) {
	switch (action.type) {
	    case actions.SEARCH_FORM_CHANGED:
	    	return action.event.target.value;
	    default:
	     	return state;
 	}
}

function selectedPageReducer(state = RACES_PAGE, action) {
	switch (action.type) {
	    case actions.PAGE_BUTTON_CLICKED:
	    	return action.page;
	    default:
	     	return state;
 	}
}

const myApp = combineReducers({
		results: resultsReducer,
		races: racesReducer,
		runnerName: runnerNameReducer,
		selectedPage: selectedPageReducer,
	})

export default myApp;