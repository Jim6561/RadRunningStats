import { connect } from 'react-redux';
import RacesPage from '../components/RacesPage';
import { 
	racesTableSortClicked, 
	showRaceLocationsClicked, 
	showWinningTimeClicked, 
	showMedianTimeClicked,
	showAllRaceTimesClicked
} from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		data: state.races.table.rows,
		showLocations: state.races.showLocations,
		showWinningTime: state.races.showWinningTime,
		showMedianTime: state.races.showMedianTime,
		showAllTimes: state.races.showAllTimes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSortTable: (column) => {
			dispatch(racesTableSortClicked(column));
		},
		onShowLocationChange: () => {
			dispatch(showRaceLocationsClicked());
		},		
		onShowWinningTimeChange: () => {
			dispatch(showWinningTimeClicked());
		},
		onShowMedianTimeChange: () => {
			dispatch(showMedianTimeClicked());
		},
		onShowAllTimesChange: () => {
			dispatch(showAllRaceTimesClicked());
		}
	}
}

const RacesPageHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesPage)

export default RacesPageHolder