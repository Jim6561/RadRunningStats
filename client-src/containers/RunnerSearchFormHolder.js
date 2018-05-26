import { connect } from 'react-redux';
import RunnerSearch from '../components/RunnerSearch';
import { searchFormChanged, resultsRequested } from '../actions/actionCreators';

const mapStateToProps = state => {
  return {
    runnerName: state.runnerName,
    results: state.results
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onclick: () => {
			dispatch(resultsRequested());
		},
		onchange: (e) => {
			dispatch(searchFormChanged(e))
		},
		onkeyup: (e) => {
			//13 = enter
			if (e.keyCode === 13) {
				dispatch(resultsRequested());
			}
		}
	}
}

const RunnerSearchFormHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunnerSearch)

export default RunnerSearchFormHolder