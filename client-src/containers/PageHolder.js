import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
import { pageButtonClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		selectedPage: state.selectedPage,
		races: state.races
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

const PageHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)

export default PageHolder