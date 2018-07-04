import selectedRace from '../reducers/selectedRace'
import * as actions from '../actions/actions'

describe('selectedRace reducer', () => {
	it('should start with no selected race', () => {
		expect(selectedRace(undefined, {}).raceId).toEqual(null);
	});

	it('should handle SINGLE_RACE_CLICKED', () => {
		var state = {raceId: null};
		var raceId = '1234';
		var action = {
			type: actions.SINGLE_RACE_CLICKED,
        	raceId: raceId
        };

		expect(selectedRace(state, action).raceId).toEqual(raceId);
	});

	it('should handle RETURN_TO_RACES_CLICKED', () => {
		var state = {raceId: '1234'};
		var action = {
			type: actions.RETURN_TO_RACES_CLICKED
        };

		expect(selectedRace(state, action).raceId).toEqual(null);
	});
});
