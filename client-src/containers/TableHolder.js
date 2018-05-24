import { connect } from 'react-redux';
import AwesomeTable from '../components/AwesomeTable';

const mapStateToProps = state => {
	let data;
	if (state.selectedPage === 'RESULTS_PAGE') {
		data = state.results
	}
	else if (state.selectedPage === 'RACES_PAGE') {
		data = state.races	
	}
	else {
		console.log('unexpected page in state: ' + state.selectedPage);
	}

	return {
		data: data
	}
}

//This table doesn't do anything.
const mapDispatchToProps = dispatch => {
	return {}
}

const TableHolder = connect(
 	mapStateToProps,
	mapDispatchToProps
)(AwesomeTable)

export default TableHolder