import { connect } from 'react-redux';
import RunnerSearch from '../components/RunnerSearch';
import { searchFormChanged, resultsRequested, resultsTableSortClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
  return {
    runnerName: state.runnerName,
    results: state.results
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onClick: () => {
			dispatch(resultsRequested());
		},
		onChange: (e) => {
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
		}
	}
}

const RunnerSearchFormHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunnerSearch)

export default RunnerSearchFormHolder