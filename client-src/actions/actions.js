/*
 * action types
 */
export const RESULTS_REQUESTED = 'RESULTS_REQUESTED';
export const RECEIVE_RESULTS_SUCCESS = 'RECEIVE_RESULTS_SUCCESS';
export const RECEIVE_RESULTS_FAILED = 'RECEIVE_RESULTS_FAILED';


/*
 * action creators
 */
export function receiveResults(runnerName) {
	return {
		type: RESULTS_REQUESTED,
		runnerName: runnerName
	}
};

export function receiveResults_success(records) {
	return {
		type: RECEIVE_RESULTS_SUCCESS,
		records
	}
};

/*export function receiveResults(records) {
	return {
		type: RECEIVE_RESULTS_FAILED,
		records
	}
};*/