import { connect } from 'react-redux';
import RunnerSearchForm from '../components/RunnerSearchForm';
import { searchFormChanged, resultsRequested } from '../actions/actions';

const mapStateToProps = state => {
  return {
    data: state.runnerName
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onclick: () => {
			dispatch(resultsRequested())
		},
		onchange: (e) => {
			dispatch(searchFormChanged(e))
		}
	}
}

const RunnerSearchFormHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(RunnerSearchForm)

export default RunnerSearchFormHolder