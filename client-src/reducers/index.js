import {RECEIVE_RESULTS_SUCCESS, SEARCH_FORM_CHANGED, PAGE_BUTTON_CLICKED} from '../actions/actions'


//Make these sensible constants somehow.
//And the ones on HeaderBar
//Also, change to use that spreader thing
const RESULTS_PAGE = 'RESULTS_PAGE';
const RACES_PAGE = 'RACES_PAGE';

const initialState = {
	selectedPage: RESULTS_PAGE,
	runnerName: '',
	results: [],
	races: []
};

function myApp(state = initialState, action) {

	switch (action.type) {
	    case RECEIVE_RESULTS_SUCCESS:
	    	return Object.assign({}, state, {
	     		results: action.records
	     	});
	    case SEARCH_FORM_CHANGED:
	    	return Object.assign({}, state, {
	    		runnerName: action.event.target.value
	    	});
	    case PAGE_BUTTON_CLICKED:
	    	return Object.assign({}, state, {
	    		selectedPage: action.page
	    	});
	    default:
	     	return state;
 	}
}

export default myApp;