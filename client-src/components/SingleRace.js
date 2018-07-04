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
        <div>
          <span className='raceTitle'>{this.props.raceName}</span>
          <span
              id='backToRaces'
              className='mediumButton'
              onClick={this.handleClick}
           >Back</span>
        </div>
        <div className='propertiesSection'>
          <span className='raceProperty'>{(new Date(this.props.eventDate).toLocaleDateString())}</span>
          <span className='raceProperty'>Distance: {this.props.distance}</span>
        </div>
        <div>
          <CheckBox
            label='Show Locations'
            checked={this.props.showLocations}
            onChange={this.props.onShowLocationChange}/>
        </div>
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
