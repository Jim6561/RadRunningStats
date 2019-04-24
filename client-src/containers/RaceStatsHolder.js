import { connect } from 'react-redux';
import RaceStats from '../components/RaceStats';


const mapStateToProps = state => {
	return {
		quartiles: state.selectedRace.quartiles
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

const RaceStatsHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RaceStats)

export default RaceStatsHolder