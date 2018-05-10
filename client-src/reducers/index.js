import {RECEIVE_RESULTS_SUCCESS, SEARCH_FORM_CHANGED} from '../actions/actions'

const initialState = {
	runnerName: '',
	records: []
};

function myApp(state = initialState, action) {

	switch (action.type) {
	    case RECEIVE_RESULTS_SUCCESS:
	    	return Object.assign({}, state, {
	     		records: action.records
	     	})
	    case SEARCH_FORM_CHANGED:
	    	return Object.assign({}, state, {
	    		runnerName: action.event.target.value
	    	})
	    default:
	     	return state
 	}
}

export default myApp;