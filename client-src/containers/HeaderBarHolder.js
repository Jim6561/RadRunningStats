import { connect } from 'react-redux';
import HeaderBar from '../components/HeaderBar';
import { searchFormChanged, resultsRequested, pageButtonClicked } from '../actions/actions';

const mapStateToProps = state => {
	return {

	}
}

const mapDispatchToProps = dispatch => {
	return {
		showPage: (whichPage) => {

			if (whichPage === 'results') {
				dispatch(pageButtonClicked('RESULTS_PAGE'));
			} else if (whichPage === 'races') {
				dispatch(pageButtonClicked('RACES_PAGE'));
			} else {
				console.error('unexpected page clicked: ' + whichPage);
			}
		}
	}
}

const HeaderBarHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderBar)

export default HeaderBarHolder