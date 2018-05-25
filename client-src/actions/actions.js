/*
 * action types
 */
export const SEARCH_FORM_CHANGED = 'SEARCH_FORM_CHANGED';
export const RESULTS_REQUESTED = 'RESULTS_REQUESTED';
export const RECEIVE_RESULTS_SUCCESS = 'RECEIVE_RESULTS_SUCCESS';
export const RECEIVE_RESULTS_FAILED = 'RECEIVE_RESULTS_FAILED';
export const RACES_REQUESTED = 'RACES_REQUESTED';
export const RECEIVE_RACES_SUCCESS = 'RECEIVE_RACES_SUCCESS';
export const RECEIVE_RACES_FAILED = 'RECEIVE_RACES_FAILED';
export const PAGE_BUTTON_CLICKED = 'PAGE_BUTTON_CLICKED';


/*
 * action creators
 */
export function searchFormChanged(event) {
	return {
		type: SEARCH_FORM_CHANGED,
		event: event
	}
};

export function resultsRequested() {
	return {
		type: RESULTS_REQUESTED
	}
};

export function receiveResults_success(records) {
	return {
		type: RECEIVE_RESULTS_SUCCESS,
		records
	}
};

export function receiveResults_failed(records) {
	return {
		type: RECEIVE_RESULTS_FAILED,
		records
	}
};

export function racesRequested() {
	return {
		type: RACES_REQUESTED
	}
};

export function receiveRaces_success(records) {
console.log('action: receiveRaces_success');
	return {
		type: RECEIVE_RACES_SUCCESS,
		records
	}
};

export function receiveRaces_failed(records) {
	return {
		type: RECEIVE_RACES_FAILED,
		records
	}
};

export function pageButtonClicked(page) {
	return {
		type: PAGE_BUTTON_CLICKED,
		page
	}
};
