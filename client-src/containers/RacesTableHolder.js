import { connect } from 'react-redux';
import RacesTable from '../components/RacesTable';

const mapStateToProps = state => {
	return {
		data: state.races
	}
}

//This table doesn't do anything.
const mapDispatchToProps = dispatch => {
	return {}
}

const RacesTableHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesTable)

export default RacesTableHolder