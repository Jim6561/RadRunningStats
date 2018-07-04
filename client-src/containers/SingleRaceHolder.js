import { connect } from 'react-redux';
import SingleRace from '../components/SingleRace';
import { singleRaceTableSortClicked, showSingleRaceLocationsClicked, returnToRacesClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		results: state.selectedRace.table.rows,
		raceId: state.selectedRace.raceId,
		raceName: state.selectedRace.raceDetails.raceName,
		distance: state.selectedRace.raceDetails.distance,
		eventDate: state.selectedRace.raceDetails.eventDate,
		showLocations: state.selectedRace.showLocations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSortTable: (column) => {
			dispatch(singleRaceTableSortClicked(column));
		},
		onShowLocationChange: () => {
			dispatch(showSingleRaceLocationsClicked());
		},
		onReturnToRacesClicked: () => {
			dispatch(returnToRacesClicked());
		}
	}
}

const SingleRaceHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRace)

export default SingleRaceHolder