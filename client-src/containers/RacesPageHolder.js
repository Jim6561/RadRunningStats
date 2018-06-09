import { connect } from 'react-redux';
import RacesPage from '../components/RacesPage';
import { 
	racesTableSortClicked, 
	showRaceLocationsClicked, 
	showWinningTimeClicked, 
	showMedianTimeClicked,
	showAllRaceTimesClicked,
	showRacePacesClicked,
	singleRaceClicked
} from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		data: state.races.table.rows,
		showLocations: state.races.showLocations,
		showWinningTime: state.races.showWinningTime,
		showMedianTime: state.races.showMedianTime,
		showAllTimes: state.races.showAllTimes,
		showPaces: state.races.showPaces
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
		},
		onShowPacesChange: () => {
			dispatch(showRacePacesClicked());
		},
		onSingleRaceClicked: (raceId) => {
			dispatch(singleRaceClicked(raceId));
		}
	}
}

const RacesPageHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesPage)

export default RacesPageHolder