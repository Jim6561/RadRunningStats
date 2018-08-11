import * as actions from '../actions/actions'

export function searchFormNameChanged(event) {
	return {
		type: actions.SEARCH_FORM_NAME_CHANGED,
		event: event
	}
};

export function searchFormBibChanged(event) {
	return {
		type: actions.SEARCH_FORM_BIB_CHANGED,
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
		records: records
	}
};

export function receiveResults_failed(err) {
	return {
		type: actions.RECEIVE_RESULTS_FAILED,
		err: err
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
		records: records
	}
};

export function receiveRaces_failed(err) {
	return {
		type: actions.RECEIVE_RACES_FAILED,
		err: err
	}
};

export function pageButtonClicked(page) {
	return {
		type: actions.PAGE_BUTTON_CLICKED,
		page: page
	}
};

export function racesTableSortClicked(column) {
	return {
		type: actions.RACES_TABLE_SORT_CLICKED,
		column: column
	}
};

export function resultsTableSortClicked(column) {
	return {
		type: actions.RESULTS_TABLE_SORT_CLICKED,
		column: column
	}
};

export function showResultLocationsClicked() {
	return {
		type: actions.SHOW_RESULT_LOCATIONS_CLICKED
	}
};

export function showRaceLocationsClicked() {
	return {
		type: actions.SHOW_RACE_LOCATIONS_CLICKED
	}
};

export function showWinningTimeClicked() {
	return {
		type: actions.SHOW_WINNING_TIME_CLICKED
	}
};

export function showMedianTimeClicked() {
	return {
		type: actions.SHOW_MEDIAN_TIME_CLICKED
	}
};

export function showAllRaceTimesClicked() {
	return {
		type: actions.SHOW_ALL_RACE_TIMES_CLICKED
	}
};

export function showRacePacesClicked() {
	return {
		type: actions.SHOW_RACE_PACES_CLICKED
	}
};

export function singleRaceClicked(row) {
	return {
		type: actions.SINGLE_RACE_CLICKED,
		raceId: row.race_id,
		distance: row.distance,
		raceName: row.race_name,
		eventDate: row.event_date
	}
};

export function receiveSelectedRaceResults_success(records) {
	return {
		type: actions.RECEIVE_SELECTED_RACE_SUCCESS,
		records
	}
};

export function receiveSelectedRaceResults_failed(err) {
	return {
		type: actions.RECEIVE_SELECTED_RACE_FAILED,
		err
	}
};

export function singleRaceTableSortClicked(column) {
	return {
		type: actions.SINGLE_RACE_TABLE_SORT_CLICKED,
		column
	}
};

export function showSingleRaceLocationsClicked() {
	return {
		type: actions.SINGLE_RACE_TABLE_LOCATIONS_CLICKED
	}
};

export function returnToRacesClicked() {
	return {
		type: actions.RETURN_TO_RACES_CLICKED
	}
};

export function divisionSelected(division) {
	return {
		type: actions.DIVISION_SELECTED,
		division: division
	}
};