import results from '../../reducers/results'
import * as actions from '../../actions/actions'

import { makeTable } from '../../reducers/sortTable'

describe('results reducer', () => {
	describe('showLocations', () => {
		it('should start with default false', () => {
			expect(results(undefined, {}).showLocations).toBe(false);
		});

		describe('tableReducer', () => {
			it('should start with default table', () => {
				var expectedTable = makeTable();
				expect(results(undefined, {}).table).toEqual(expectedTable);
			});

			it('should handle RECEIVE_RESULTS_SUCCESS', () => {
				var action = {
					type: actions.RECEIVE_RESULTS_SUCCESS,
					records: [{name: 'Nate', age: 10}, {name: 'Alice', age: 7}]
	        	},
	        	expected = makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}]);

				expect(results({}, action).table).toEqual(expected);
			});

			it('should handle RECEIVE_RESULTS_FAILED', () => {
				var state = {
					table: makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}])
				},
				action = {
					type: actions.RECEIVE_RESULTS_FAILED
	        	},
	        	expected = makeTable([]);

				expect(results(state, action).table).toEqual(expected);
			});

			it('should handle RESULTS_TABLE_SORT_CLICKED', () => {
				var state = {
					table: makeTable([{name: 'Nate', age: 10}, {name: 'Alice', age: 7}])
				},
				action = {
					type: actions.RESULTS_TABLE_SORT_CLICKED,
					column: 'name'
	        	},
	        	expected = makeTable([{name: 'Alice', age: 7}, {name: 'Nate', age: 10}]);

				expect(results(state, action).table.rows).toEqual(expected.rows);
			});
		});

		it('should handle SHOW_RESULT_LOCATIONS_CLICKED', () => {
			var action = {
				type: actions.SHOW_RESULT_LOCATIONS_CLICKED
	        };

			expect(results({showLocations: false}, action).showLocations).toBe(true);
			expect(results({showLocations: true}, action).showLocations).toBe(false);
		});
	});
});