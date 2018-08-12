import results from '../../reducers/results'
import * as actions from '../../actions/actions'

import { makeTable } from '../../reducers/sortTable'

describe('results reducer', () => {
	describe('runnerName', () => {
		it('should start with empty name', () => {
			expect(results(undefined, {}).runnerName).toBe('');
		});

		it('should handle SEARCH_FORM_NAME_CHANGED', () => {
			var expectedData = 'test text',
			action = {
				type: actions.SEARCH_FORM_NAME_CHANGED,
				event: {
					target: {
						value: expectedData
					}
				}
			};

			expect(results(undefined, action).runnerName).toBe(expectedData);
		});
	});

	describe('runnerBib', () => {
		it('should start with empty bib', () => {
			expect(results(undefined, {}).runnerBib).toBe('');
		});

		it('should handle SEARCH_FORM_BIB_CHANGED', () => {
			var expectedData = 'test text',
			action = {
				type: actions.SEARCH_FORM_BIB_CHANGED,
				event: {
					target: {
						value: expectedData
					}
				}
			};

			expect(results(undefined, action).runnerBib).toBe(expectedData);
		});
	});

	describe('showLocations', () => {
		it('should start with default false', () => {
			expect(results(undefined, {}).showLocations).toBe(false);
		});

		it('should handle SHOW_RESULT_LOCATIONS_CLICKED', () => {
			var action = {
				type: actions.SHOW_RESULT_LOCATIONS_CLICKED
	        };

			expect(results({showLocations: false}, action).showLocations).toBe(true);
			expect(results({showLocations: true}, action).showLocations).toBe(false);
		});
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

			expect(results(undefined, action).table).toEqual(expected);
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
});