import { connect } from 'react-redux';
import RacesPage from '../components/RacesPage';

const mapStateToProps = state => {
	return {
		selectedRaceId: state.selectedRace.raceId
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const RacesPageHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesPage)

export default RacesPageHolder