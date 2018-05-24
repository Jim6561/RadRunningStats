/*
 * action types
 */
export const SEARCH_FORM_CHANGED = 'SEARCH_FORM_CHANGED';
export const RESULTS_REQUESTED = 'RESULTS_REQUESTED';
export const RECEIVE_RESULTS_SUCCESS = 'RECEIVE_RESULTS_SUCCESS';
export const RECEIVE_RESULTS_FAILED = 'RECEIVE_RESULTS_FAILED';
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

export function pageButtonClicked(page) {
	return {
		type: PAGE_BUTTON_CLICKED,
		page
	}
};

/*export function receiveResults_failed(records) {
	return {
		type: RECEIVE_RESULTS_FAILED,
		records
	}
};*/