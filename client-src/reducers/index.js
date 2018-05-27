import * as actions from '../actions/actions'
import arraySort from 'array-sort'


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
	arraySort(data, column);

	return data;
}

function myApp(state = initialState, action) {
	switch (action.type) {
	    case actions.RECEIVE_RESULTS_SUCCESS:
	    	return {
	    		...state,
	    		results: action.records
	    	};
	    case actions.RECEIVE_RESULTS_FAILED:
	    	return {
	    		...state,
	    		results: []
	    	};
	    case actions.RECEIVE_RACES_SUCCESS:
	    	return {
	    		...state,
	     		races: action.records
	     	};
		case actions.RECEIVE_RACES_FAILED:
	    	return {
	    		...state,
	     		races: []
	     	};
	    case actions.SEARCH_FORM_CHANGED:
	    	return {
	    		...state,
	    		runnerName: action.event.target.value
	    	};
	    case actions.PAGE_BUTTON_CLICKED:
	    	return {
	    		...state,
	    		selectedPage: action.page
	    	};
	    case actions.RACES_TABLE_SORT_CLICKED:
	    	return {
	    		...state,
	    		races: arraySort(state.races.slice(0), action.column)
	    	}
	    case actions.RESULTS_TABLE_SORT_CLICKED:
	    	return {
	    		...state,
	    		results: arraySort(state.results.slice(0), action.column)
	    	}
	    default:
	     	return state;
 	}
}

export default myApp;