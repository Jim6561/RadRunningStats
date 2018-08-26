import { sortTable, makeTable, selectRow } from '../../reducers/sortTable'

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

	describe('selectRow method', () => {
		var data = [
			{name: 'Nate'},
			{name: 'Alice'},
			{name: 'Teag'}
		];
		it('marks the indicated row as selected', () => {
			var input = makeTable(data),
				output1 = selectRow(input, 1);
			expect(output1.rows[0].selected).not.toBe(true);
			expect(output1.rows[1].selected).toBe(true);
			expect(output1.rows[2].selected).not.toBe(true);

			//Select a different row
			var output2 = selectRow(output1, 0);
			expect(output2.rows[0].selected).toBe(true);
			expect(output2.rows[1].selected).not.toBe(true);
			expect(output2.rows[2].selected).not.toBe(true);

			//Unselect the row
			var output3 = selectRow(output2, 0);
			expect(output3.rows[0].selected).not.toBe(true);
			expect(output3.rows[1].selected).not.toBe(true);
			expect(output3.rows[2].selected).not.toBe(true);
		});
	})
});