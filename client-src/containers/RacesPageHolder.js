import { connect } from 'react-redux';
import RacesPage from '../components/RacesPage';
import { 
	racesTableSortClicked, 
	showRaceLocationsClicked, 
	showWinningTimeClicked, 
	showMedianTimeClicked
} from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		data: state.races.table.rows,
		showLocations: state.races.showLocations,
		showWinningTime: state.races.showWinningTime,
		showMedianTime: state.races.showMedianTime
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
		}
	}
}

const RacesPageHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesPage)

export default RacesPageHolder