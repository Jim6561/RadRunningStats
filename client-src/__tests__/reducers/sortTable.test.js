import { sortTable, makeTable } from '../../reducers/sortTable'

describe('sortTable', () => {
	describe('makeTable method', () => {
		it('should default sorting', () => {
			var expectedValue = {
				rows: [],
				allRows: [],
				sortColumn: null,
				acsending: true
			};
			expect(makeTable()).toEqual(expectedValue);
		});

		it('should put the data in', () => {
			var rows = [{name: 'Rob'}],
				sortColumn = 'name',
				ascending = false,
				expectedValue = {
					rows: rows,
					allRows: rows,
					sortColumn: sortColumn,
					acsending: ascending
				};
			expect(makeTable(rows, sortColumn, ascending)).toEqual(expectedValue);
		});
	});

	describe('sortTable method', () => {
		var data = [
			{name: 'Nate', age: 10, favouriteColor: 'lavender'},
			{name: 'Alice', age: 7, favouriteColor: 'blue'},
			{name: 'Teag', age: 8, favouriteColor: 'red'}
		];
		it('sorts by the indicated colun', () => {
			var input = makeTable(data),
				expectedData = [
					{name: 'Alice', age: 7, favouriteColor: 'blue'},
					{name: 'Teag', age: 8, favouriteColor: 'red'},
					{name: 'Nate', age: 10, favouriteColor: 'lavender'}
				];
			expect(sortTable(input, 'age').rows).toEqual(expectedData);
		});
		it('sorts then reverses', () => {
			var input = makeTable(data),
				expectedData1 = [
					{name: 'Alice', age: 7, favouriteColor: 'blue'},
					{name: 'Nate', age: 10, favouriteColor: 'lavender'},
					{name: 'Teag', age: 8, favouriteColor: 'red'}
				],
				expectedData2 = [
					{name: 'Teag', age: 8, favouriteColor: 'red'},
					{name: 'Nate', age: 10, favouriteColor: 'lavender'},
					{name: 'Alice', age: 7, favouriteColor: 'blue'}
				];
			var sortedState = sortTable(input, 'favouriteColor');
			expect(sortedState.rows).toEqual(expectedData1);
			var secondSortedState = sortTable(sortedState, 'favouriteColor')
			expect(secondSortedState.rows).toEqual(expectedData2);
		});
		it('sorts by distance in miles instead of distance', () => {
			var distanceData = [
					{name: 'James', distance: 'ultra', distance_miles: 100.5},
					{name: 'Nathaniel', distance: 'ultra', distance_miles: 50},
					{name: 'Jim', distance: 'ultra', distance_miles: 100}				
				],
				expectedData = [
					{name: 'Nathaniel', distance: 'ultra', distance_miles: 50},
					{name: 'Jim', distance: 'ultra', distance_miles: 100},
					{name: 'James', distance: 'ultra', distance_miles: 100.5}
				],
			input = makeTable(distanceData);
			expect(sortTable(input, 'distance').rows).toEqual(expectedData);
		})
	});
});