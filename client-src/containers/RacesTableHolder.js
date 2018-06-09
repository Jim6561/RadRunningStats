import { connect } from 'react-redux';
import RacesTable from '../components/RacesTable';
import { racesTableSortClicked } from '../actions/actionCreators';

const mapStateToProps = state => {
	return {
		data: state.races.table.rows
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSortTable: (column) => {
			dispatch(racesTableSortClicked(column));
		}
	}
}

const RacesTableHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(RacesTable)

export default RacesTableHolder