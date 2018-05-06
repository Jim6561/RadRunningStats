import {RECEIVE_RESULTS} from '../actions/actions'

const initialState = {
	records: []
};

function myApp(state = initialState, action) {

	switch (action.type) {
	    case RECEIVE_RESULTS:
console.log('receiving results');
	    	return Object.assign({}, state, {
	     		records: action.records
	     	})
	    default:
	     	return state
 	}
}

export default myApp;