import { connect } from 'react-redux';
import RacesPage from '../components/RacesPage';
import { racesTableSortClicked, showRaceLocationsClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		data: state.races.table.rows,
		showLocations: state.races.showLocations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSortTable: (column) => {
			dispatch(racesTableSortClicked(column));
		},
		onShowLocationChange: () => {
			dispatch(showRaceLocationsClicked());
		}
	}
}

const RacesPageHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesPage)

export default RacesPageHolder