import * as actions from '../actions/actions'


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

function myApp(state = initialState, action) {

	switch (action.type) {
	    case actions.RECEIVE_RESULTS_SUCCESS:
	    	return Object.assign({}, state, {
	     		results: action.records
	     	});
	    case actions.RECEIVE_RESULTS_FAILED:
	    	return Object.assign({}, state, {
	     		results: []
	     	});
	    case actions.RECEIVE_RACES_SUCCESS:
	    	return Object.assign({}, state, {
	     		races: action.records
	     	});
		case actions.RECEIVE_RACES_FAILED:
	    	return Object.assign({}, state, {
	     		races: []
	     	});
	    case actions.SEARCH_FORM_CHANGED:
	    	return Object.assign({}, state, {
	    		runnerName: action.event.target.value
	    	});
	    case actions.PAGE_BUTTON_CLICKED:
	    	return Object.assign({}, state, {
	    		selectedPage: action.page
	    	});
	    default:
	     	return state;
 	}
}

export default myApp;