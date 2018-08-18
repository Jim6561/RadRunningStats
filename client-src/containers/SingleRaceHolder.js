import { connect } from 'react-redux';
import SingleRace from '../components/SingleRace';
import { 
	singleRaceTableSortClicked, 
	showSingleRaceLocationsClicked, 
	returnToRacesClicked, 
	divisionSelected,
	calculateSelectedRaceStats
 } 
from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		results: state.selectedRace.table.rows,
		allResults: state.selectedRace.table.allRows,
		divisions: state.selectedRace.divisions,
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
		},
		onDivisionSelected: (division) => {
			dispatch(divisionSelected(division));
		},
		onRecordsChanged: (allResults, selectedRecords) => {
			dispatch(calculateSelectedRaceStats(allResults, selectedRecords));
		}
	}
}

const SingleRaceHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRace)

export default SingleRaceHolder