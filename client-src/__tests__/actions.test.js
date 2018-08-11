import * as actions from '../actions/actions'
import * as creators from '../actions/actionCreators'

describe('actions', () => {
	it('should create SEARCH_FORM_NAME_CHANGED action', () => {
		var event = {thing: 'test'},
			expectedAction = {
				type: actions.SEARCH_FORM_NAME_CHANGED,
				event: event
			};
		expect(creators.searchFormNameChanged(event)).toEqual(expectedAction);
	});

	it('should create SEARCH_FORM_BIB_CHANGED action', () => {
		var event = {thing: 'test'},
			expectedAction = {
				type: actions.SEARCH_FORM_BIB_CHANGED,
				event: event
			};
		expect(creators.searchFormBibChanged(event)).toEqual(expectedAction);
	});

	it('should create RESULTS_REQUESTED action', () => {
		var expectedAction = {
				type: actions.RESULTS_REQUESTED
			};
		expect(creators.resultsRequested()).toEqual(expectedAction);
	});

	it('should create RECEIVE_RESULTS_SUCCESS action', () => {
		var records = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_RESULTS_SUCCESS,
				records: records
			};
		expect(creators.receiveResults_success(records)).toEqual(expectedAction);
	});

	it('should create RECEIVE_RESULTS_FAILED action', () => {
		var err = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_RESULTS_FAILED,
				err: err
			};
		expect(creators.receiveResults_failed(err)).toEqual(expectedAction);
	});

	it('should create racesRequested action', () => {
		var expectedAction = {
				type: actions.RACES_REQUESTED
			};
		expect(creators.racesRequested()).toEqual(expectedAction);
	});

	it('should create RECEIVE_RACES_SUCCESS action', () => {
		var records = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_RACES_SUCCESS,
				records: records
			};
		expect(creators.receiveRaces_success(records)).toEqual(expectedAction);
	});

	it('should create RECEIVE_RACES_FAILED action', () => {
		var err = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_RACES_FAILED,
				err: err
			};
		expect(creators.receiveRaces_failed(err)).toEqual(expectedAction);
	});

	it('should create PAGE_BUTTON_CLICKED action', () => {
		var page = 'test',
			expectedAction = {
				type: actions.PAGE_BUTTON_CLICKED,
				page: page
			};
		expect(creators.pageButtonClicked(page)).toEqual(expectedAction);
	});

	it('should create RACES_TABLE_SORT_CLICKED action', () => {
		var column = 'test',
			expectedAction = {
				type: actions.RACES_TABLE_SORT_CLICKED,
				column: column
			};
		expect(creators.racesTableSortClicked(column)).toEqual(expectedAction);
	});

	it('should create RESULTS_TABLE_SORT_CLICKED action', () => {
		var column = 'test',
			expectedAction = {
				type: actions.RESULTS_TABLE_SORT_CLICKED,
				column: column
			};
		expect(creators.resultsTableSortClicked(column)).toEqual(expectedAction);
	});

	it('should create SHOW_RESULT_LOCATIONS_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_RESULT_LOCATIONS_CLICKED
			};
		expect(creators.showResultLocationsClicked()).toEqual(expectedAction);
	});

	it('should create SHOW_RACE_LOCATIONS_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_RACE_LOCATIONS_CLICKED
			};
		expect(creators.showRaceLocationsClicked()).toEqual(expectedAction);
	});

	it('should create SHOW_WINNING_TIME_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_WINNING_TIME_CLICKED
			};
		expect(creators.showWinningTimeClicked()).toEqual(expectedAction);
	});

	it('should create SHOW_MEDIAN_TIME_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_MEDIAN_TIME_CLICKED
			};
		expect(creators.showMedianTimeClicked()).toEqual(expectedAction);
	});

	it('should create SHOW_ALL_RACE_TIMES_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_ALL_RACE_TIMES_CLICKED
			};
		expect(creators.showAllRaceTimesClicked()).toEqual(expectedAction);
	});

	it('should create SHOW_RACE_PACES_CLICKED action', () => {
		var expectedAction = {
				type: actions.SHOW_RACE_PACES_CLICKED
			};
		expect(creators.showRacePacesClicked()).toEqual(expectedAction);
	});

	it('should create SINGLE_RACE_CLICKED action', () => {
		var raceId = '38',
			distance = 'all the way',
			raceName = 'special race',
			eventDate = 'soon',
			row = {	
				race_id: raceId,
				distance: distance,
				race_name: raceName,
				event_date: eventDate
			},
			expectedAction = {
				type: actions.SINGLE_RACE_CLICKED,
				raceId: raceId,
				distance: distance,
				raceName: raceName,
				eventDate: eventDate
			};
		expect(creators.singleRaceClicked(row)).toEqual(expectedAction);
	});

	it('should create RECEIVE_SELECTED_RACE_SUCCESS action', () => {
		var records = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_SELECTED_RACE_SUCCESS,
				records: records
			};
		expect(creators.receiveSelectedRaceResults_success(records)).toEqual(expectedAction);
	});

	it('should create RECEIVE_SELECTED_RACE_FAILED action', () => {
		var err = {thing: 'test'},
			expectedAction = {
				type: actions.RECEIVE_SELECTED_RACE_FAILED,
				err: err
			};
		expect(creators.receiveSelectedRaceResults_failed(err)).toEqual(expectedAction);
	});

	it('should create SINGLE_RACE_TABLE_SORT_CLICKED action', () => {
		var column = 'test',
			expectedAction = {
				type: actions.SINGLE_RACE_TABLE_SORT_CLICKED,
				column: column
			};
		expect(creators.singleRaceTableSortClicked(column)).toEqual(expectedAction);
	});

	it('should create SINGLE_RACE_TABLE_LOCATIONS_CLICKED action', () => {
		var expectedAction = {
				type: actions.SINGLE_RACE_TABLE_LOCATIONS_CLICKED
			};
		expect(creators.showSingleRaceLocationsClicked()).toEqual(expectedAction);
	});	

	it('should create RETURN_TO_RACES_CLICKED action', () => {
		var expectedAction = {
				type: actions.RETURN_TO_RACES_CLICKED
			};
		expect(creators.returnToRacesClicked()).toEqual(expectedAction);
	});	

	it('should create DIVISION_SELECTED action', () => {
		var division = 'young',
			expectedAction = {
				type: actions.DIVISION_SELECTED,
				division: division
			};
		expect(creators.divisionSelected(division)).toEqual(expectedAction);
	});	
});