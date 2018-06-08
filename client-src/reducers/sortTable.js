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
		sortColumn: sortColumn,
		acsending: acsending
	}
}
