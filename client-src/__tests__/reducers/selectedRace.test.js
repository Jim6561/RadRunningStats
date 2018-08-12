import selectedRace from '../../reducers/selectedRace'
import * as actions from '../../actions/actions'

import { makeTable } from '../../reducers/sortTable'

describe('selectedRace reducer', () => {
	describe('raceId reducer', () => {
		it('should start with no selected race', () => {
			expect(selectedRace(undefined, {}).raceId).toBe(null);
		});

		it('should handle SINGLE_RACE_CLICKED', () => {
			var state = {raceId: null};
			var raceId = '1234';
			var action = {
				type: actions.SINGLE_RACE_CLICKED,
	        	raceId: raceId
	        };

			expect(selectedRace(state, action).raceId).toBe(raceId);
		});

		it('should handle RETURN_TO_RACES_CLICKED', () => {
			var state = {raceId: '1234'};
			var action = {
				type: actions.RETURN_TO_RACES_CLICKED
	        };

			expect(selectedRace(state, action).raceId).toBe(null);
		});
	});

	describe('raceDetails reducer', () => {
		it('should start with no race details', () => {
			expect(selectedRace(undefined, {}).raceDetails).toEqual(null);
		});

		it('should handle SINGLE_RACE_CLICKED', () => {
			var state = {raceId: null},
			distance: 'really long',
			raceName: 'charity run',
			eventDate: '35th of never',
			action = {
				type: actions.SINGLE_RACE_CLICKED,
				raceId: '1',
	        	distance: distance,
				raceName: raceName,
				eventDate: eventDate
        	},
        	expected = {
	        	distance: distance,
	        	raceName: raceName,
	        	eventDate: eventDate
        	};

			expect(selectedRace(state, action).raceDetails).toEqual(expected);
		});
	});

	describe('tableReducer', () => {
		it('should start with default table', () => {
			var expectedTable = makeTable();
			expect(selectedRace(undefined, {}).table).toEqual(expectedTable);
		});

		it('should handle RECEIVE_SELECTED_RACE_SUCCESS', () => {
			var state = {raceId: null},
			action = {
				type: actions.RECEIVE_SELECTED_RACE_SUCCESS,
				records: [{name: 'Nate', age: 10}, {name: 'Alice', age: 7}]
        	},
        	expected = makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}]);

			expect(selectedRace(state, action).table).toEqual(expected);
		});

		it('should handle SINGLE_RACE_CLICKED', () => {
			var state = {raceId: null},
			action = {
				type: actions.SINGLE_RACE_CLICKED,
				raceId: 12
        	},
        	expected = makeTable([]);

			expect(selectedRace(state, action).table).toEqual(expected);
		});

		it('should handle RECEIVE_SELECTED_RESULTS_FAILED', () => {
			var state = {
				raceId: null,
				table: makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}])
			},
			action = {
				type: actions.RECEIVE_SELECTED_RESULTS_FAILED
        	},
        	expected = makeTable([]);

			expect(selectedRace(state, action).table).toEqual(expected);
		});

		it('should handle SINGLE_RACE_TABLE_SORT_CLICKED', () => {
			var state = {
				raceId: null,
				table: makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}])
			},
			action = {
				type: actions.SINGLE_RACE_TABLE_SORT_CLICKED,
				column: 'name'
        	},
        	expected = makeTable([{name: 'Alice', age: 7}, {name: 'Nate', age: 10}]);

			expect(selectedRace(state, action).table.rows).toEqual(expected.rows);
		});

		describe('should handle DIVISION_SELECTED', () => {
			var initialState = {
				raceId: null,
				table: makeTable([{name: 'Nate', div: 'B'}, {name: 'Alice', div: 'A'}, {name: 'Teag'}])
			}
			it('should filter on a normal division', () => {
				var action = {
					type: actions.DIVISION_SELECTED,
					division: 'B'
	        	},
	        	expected = makeTable([{name: 'Nate', div: 'B'}]);
				expect(selectedRace(initialState, action).table.rows).toEqual(expected.rows);
			});
			it('should show all rows when Everyone selected', () => {
				var action = {
					type: actions.DIVISION_SELECTED,
					division: 'Everyone'
	        	},
	        	expected = makeTable([{name: 'Nate', div: 'B'}, {name: 'Alice', div: 'A'}, {name: 'Teag'}]);
				expect(selectedRace(initialState, action).table.rows).toEqual(expected.rows);
			});
			it('should filter correctly when Other selected', () => {
				var action = {
					type: actions.DIVISION_SELECTED,
					division: 'Other'
	        	},
	        	expected = makeTable([{name: 'Teag'}]);
				expect(selectedRace(initialState, action).table.rows).toEqual(expected.rows);
			});
		});
	});

	describe('showLocations', () => {
		it('should start with default false', () => {
			expect(selectedRace(undefined, {}).showLocations).toBe(false);
		});

		it('should handle SINGLE_RACE_TABLE_LOCATIONS_CLICKED', () => {
			var action = {
				type: actions.SINGLE_RACE_TABLE_LOCATIONS_CLICKED
	        };

			expect(selectedRace({showLocations: false}, action).showLocations).toBe(true);
			expect(selectedRace({showLocations: true}, action).showLocations).toBe(false);
		});
	});

	describe('divisions', () => {
		it('should start with emptyArray', () => {
			expect(selectedRace(undefined, {}).divisions).toEqual([]);
		});

		describe('how is handles RECEIVE_SELECTED_RACE_SUCCESS', () => {
			it('not add Other when it\'s not necessary', () => {
				var input = [
					{name: 'dave', div: 'M40-50'},
					{name: 'linda', div: 'F10-15'},
					{name: 'gene', div: 'M10-15'}
				];
				var action = {
					type: actions.RECEIVE_SELECTED_RACE_SUCCESS,
					records: input
				};

				var actual = selectedRace({}, action).divisions;

				expect(actual).toContain('Everyone');
				expect(actual).not.toContain('Other');

				//How else can we test the sorting?
				var expected = ['Everyone', 'F10-15', 'M10-15', 'M40-50'];
				expect(actual).toEqual(expected);
			});

			it('should add Other option for blank division', () => {
				var input = [
					{name: 'dave', div: 'M40-50'},
					{name: 'linda'}
				];
				var action = {
					type: actions.RECEIVE_SELECTED_RACE_SUCCESS,
					records: input
				};

				var actual = selectedRace({}, action).divisions;
				expect(actual).toContain('Everyone');
				expect(actual).toContain('Other');
			});
		});
	});

	describe('selectedDivision', () => {
		it('should start with nothing', () => {
			expect(selectedRace(undefined, {}).selectedDivision).toBeNull();
		});

		it('should handle DIVISION_SELECTED', () => {
			var myDivision = 'oldies';
			var action = {
				type: actions.DIVISION_SELECTED,
				division: myDivision
			};

			expect(selectedRace({}, action).selectedDivision).toBe(myDivision);
		});
	});

	describe('quartiles', () => {
		it('should start with nothing', () => {
			expect(selectedRace(undefined, {}).quartiles).toEqual({});
		});

		it('should handle CALCULATE_SELECTED_RACE_STATS', () => {
			var numbers = [1, 5, 3, 7, 5, 5, 100, 5];
			var records = [];
			numbers.map(e => {records.push({gun_time: e})});

			var action = {
				type: actions.CALCULATE_SELECTED_RACE_STATS,
				records: records
			},
			expectedData = {
				min: 1,
				max: 100,
				median: 5,
				q1: 4,
				q3: 6
			};
			expect(selectedRace(undefined, action).quartiles).toEqual(expectedData);
		});
	});
});
