import { connect } from 'react-redux';
import SingleRace from '../components/SingleRace';
import { singleRaceTableSortClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		results: state.selectedRace.table.rows,
		raceId: state.selectedRace.raceId,
		showLocations: state.results.showLocations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSortTable: (column) => {
			console.log('sorting table');
			dispatch(singleRaceTableSortClicked(column));
		},
		onShowLocationChange: () => {
			console.log('show location clicked')
			//dispatch(singleRaceLocationsClicked());
		}
	}
}

const SingleRaceHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleRace)

export default SingleRaceHolder