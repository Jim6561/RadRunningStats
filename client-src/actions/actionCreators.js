import * as actions from '../actions/actions'

export function searchFormChanged(event) {
	return {
		type: actions.SEARCH_FORM_CHANGED,
		event: event
	}
};

export function resultsRequested() {
	return {
		type: actions.RESULTS_REQUESTED
	}
};

export function receiveResults_success(records) {
	return {
		type: actions.RECEIVE_RESULTS_SUCCESS,
		records
	}
};

export function receiveResults_failed(err) {
	return {
		type: actions.RECEIVE_RESULTS_FAILED,
		err
	}
};

export function racesRequested() {
	return {
		type: actions.RACES_REQUESTED
	}
};

export function receiveRaces_success(records) {
	return {
		type: actions.RECEIVE_RACES_SUCCESS,
		records
	}
};

export function receiveRaces_failed(err) {
	return {
		type: actions.RECEIVE_RACES_FAILED,
		err
	}
};

export function pageButtonClicked(page) {
	return {
		type: actions.PAGE_BUTTON_CLICKED,
		page
	}
};