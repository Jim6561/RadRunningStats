import { connect } from 'react-redux';
import RacesTable from '../components/RacesTable';
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

const RacesTableHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesTable)

export default RacesTableHolder