import {RECEIVE_RESULTS_SUCCESS} from '../actions/actions'

const initialState = {
	records: []
};

function myApp(state = initialState, action) {

	switch (action.type) {
	    case RECEIVE_RESULTS_SUCCESS:
	    	return Object.assign({}, state, {
	     		records: action.records
	     	})
	    default:
	     	return state
 	}
}

export default myApp;