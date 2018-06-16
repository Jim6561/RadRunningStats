import * as actions from '../actions/actions'
//import { sortTable, makeTable } from './sortTable'
import { combineReducers } from 'redux'

function raceId(state = null, action) {
	switch (action.type) {
		case actions.SINGLE_RACE_CLICKED:
		console.log('raceId: ' + action.raceId);
			return action.raceId;
	   	default:
	     	return state;
	}
}

const selectedRace = combineReducers({
	raceId: raceId
});

export default selectedRace;