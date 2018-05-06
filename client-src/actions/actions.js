/*
 * action types
 */
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';


/*
 * action creators
 */
export function receiveResults(records) {
	return {
		type: RECEIVE_RESULTS,
		records
	}
};