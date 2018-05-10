import { connect } from 'react-redux';
import AwesomeTable from '../components/AwesomeTable';

const mapStateToProps = state => {
  return {
    data: state.records
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