import arraySort from 'array-sort'

export const sortTable = (state, newColumn) => {

	var data = state.rows.slice(0),
		oldSortColumn = state.sortColumn,
		sortColumn = newColumn;
	
	//Sort on the numeric value behind the text
	if (newColumn === 'distance') {
		sortColumn = 'distance_miles';
	}

	var reverse = (sortColumn === oldSortColumn) ? !state.reverse : false;

	//The sorting is the least important...
	arraySort(data, sortColumn, {reverse: reverse});

	return {
		...state,
		rows: data,
		sortColumn: sortColumn,
		reverse: reverse
	};
}

export const makeTable = (rows = [], sortColumn = null, acsending = true) => {
	return {
		rows: rows,
		allRows: rows,
		sortColumn: sortColumn,
		acsending: acsending
	}
}

export const filter = (state, column, value) => {
	var visibleRows = [];
	if (value === 'Everyone') {
		visibleRows = state.allRows;
	} else if (value === 'Other') {
		state.allRows.map((row) => {
			if (!row[column]) {
				visibleRows.push(row);
			}
		})
	} else {
		state.allRows.map((row) => {
			if (row[column] === value) {
				visibleRows.push(row);
			}
		});	
	}
	
	return {
		...state,
		rows: visibleRows
	};
}