import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import ResultsTable from './ResultsTable';

class SingleRace extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onReturnToRacesClicked();
  }

  render() {
    return (
      <div>
        <span
              id='backToRaces'
              //className={racesButtonClass}
              onClick={this.handleClick}
          >Back</span>
        <h2>{this.props.raceName}</h2>
        <span>{(new Date(this.props.eventDate).toLocaleDateString())}</span>
        <span>Distance {this.props.distance}</span>
        <CheckBox
          label='Show Locations'
          checked={this.props.showLocations}
          onChange={this.props.onShowLocationChange}/>
        <ResultsTable
          data={this.props.results}
          onSortTable={this.props.onSortTable}
          showLocations={this.props.showLocations}
          showRace={false}/>
      </div>
    )
  }
}

SingleRace.propTypes = {
	raceName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
	results: PropTypes.array.isRequired, 
	showLocations: PropTypes.bool.isRequired,
  onSortTable: PropTypes.func.isRequired, 
  onShowLocationChange: PropTypes.func.isRequired,
  onReturnToRacesClicked: PropTypes.func.isRequired
}

export default SingleRace;
