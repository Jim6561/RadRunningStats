import * as actions from '../actions/actions'
import { combineReducers } from 'redux'
import results from './results'
import races from './races'
import selectedRace from './selectedRace'

//Make these sensible constants somehow.
//And the ones on HeaderBar
const RESULTS_PAGE = 'RESULTS_PAGE';
const RACES_PAGE = 'RACES_PAGE';

function selectedPageReducer(state = RACES_PAGE, action) {
	switch (action.type) {
	    case actions.PAGE_BUTTON_CLICKED:
	    	return action.page;
	    default:
	     	return state;
 	}
}

const myApp = combineReducers({
		results: results,
		races: races,
		selectedPage: selectedPageReducer,
		selectedRace: selectedRace
	})

export default myApp;