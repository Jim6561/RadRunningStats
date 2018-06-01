import * as actions from '../actions/actions'
import arraySort from 'array-sort'
import { combineReducers } from 'redux'


//Make these sensible constants somehow.
//And the ones on HeaderBar
//Also, change to use that spreader thing
const RESULTS_PAGE = 'RESULTS_PAGE';
const RACES_PAGE = 'RACES_PAGE';

function sortTable(state, newColumn) {

	var data = state.rows.slice(0),
		oldSortColumn = state.sortColumn,
		sortColumn = newColumn;
	
	//Sort on the numeric value behind the text
	if (newColumn === 'distance') {
		sortColumn = 'distance_miles';
	}

	var reverse = (sortColumn === oldSortColumn) ? !state.reverse : false;

	//The sorting is the least important...
	arraySort(data, sortColumn, {reverse: reverse});

	return {rows: data, sortColumn: sortColumn, reverse: reverse};
}

function resultsReducer(state = {rows: [], sortColumn: null, acsending: true}, action) {
	switch (action.type) {
		case actions.RECEIVE_RESULTS_SUCCESS:
			return {
				...state,
				rows: action.records
			};
	    case actions.RECEIVE_RESULTS_FAILED:
	    	return {
	    		...state,
	    		rows: []
	    	};
	    case actions.RESULTS_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
	    default:
	     	return state;
	}
}

function racesReducer(state = {rows: [], sortColumn: null, acsending: true}, action) {
	switch (action.type) {
		case actions.RECEIVE_RACES_SUCCESS:
	    	return {
				...state,
				rows: action.records
			};
		case actions.RECEIVE_RACES_FAILED:
	    	return {
	    		...state,
	    		rows: []
	    	};
	     case actions.RACES_TABLE_SORT_CLICKED:
	    	return sortTable(state, action.column);
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