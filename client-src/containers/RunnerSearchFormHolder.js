import { connect } from 'react-redux';
import RunnerSearch from '../components/RunnerSearch';
import { searchFormNameChanged, searchFormBibChanged, resultsRequested, resultsTableSortClicked, showResultLocationsClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
  return {
    runnerName: state.results.runnerName,
    runnerBib: state.results.runnerBib,
    results: state.results.table.rows,
    showLocations: state.results.showLocations
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onSearchClick: () => {
			dispatch(resultsRequested());
		},
		onNameChange: (e) => {
			dispatch(searchFormNameChanged(e))
		},
		onBibChange: (e) => {
			dispatch(searchFormBibChanged(e))
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