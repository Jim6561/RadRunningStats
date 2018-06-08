import { connect } from 'react-redux';
import RunnerSearch from '../components/RunnerSearch';
import { searchFormChanged, resultsRequested, resultsTableSortClicked, showResultLocationsClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
  return {
    runnerName: state.runnerName,
    results: state.results.table.rows,
    showLocations: state.results.showLocations
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => {
			dispatch(resultsRequested());
		},
		onNameChange: (e) => {
			dispatch(searchFormChanged(e))
		},
		onKeyup: (e) => {
			//13 = enter
			if (e.keyCode === 13) {
				dispatch(resultsRequested());
			}
		},
		onSortTable: (column) => {
			dispatch(resultsTableSortClicked(column));
		},
		onShowLocationChange: () => {
			dispatch(showResultLocationsClicked());
		}
	}
}

const RunnerSearchFormHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunnerSearch)

export default RunnerSearchFormHolder