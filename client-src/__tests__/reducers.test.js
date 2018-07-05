import selectedRace from '../reducers/selectedRace'
import * as actions from '../actions/actions'

describe('selectedRace reducer', () => {
	describe('raceId reducer', () => {
		it('should start with no selected race', () => {
			expect(selectedRace(undefined, {}).raceId).toBe(null);
		});

		it('should handle SINGLE_RACE_CLICKED', () => {
			var state = {raceId: null};
			var raceId = '1234';
			var action = {
				type: actions.SINGLE_RACE_CLICKED,
	        	raceId: raceId
	        };

			expect(selectedRace(state, action).raceId).toBe(raceId);
		});

		it('should handle RETURN_TO_RACES_CLICKED', () => {
			var state = {raceId: '1234'};
			var action = {
				type: actions.RETURN_TO_RACES_CLICKED
	        };

			expect(selectedRace(state, action).raceId).toBe(null);
		});
	});

	describe('raceDetails reducer', () => {
		it('should start with no race details', () => {
			expect(selectedRace(undefined, {}).raceDetails).toEqual(null);
		});

		it('should handle SINGLE_RACE_CLICKED', () => {
			var state = {raceId: null},
				distance: 'really long',
				raceName: 'charity run',
				eventDate: '35th of never',
				action = {
					type: actions.SINGLE_RACE_CLICKED,
					raceId: '1',
		        	distance: distance,
					raceName: raceName,
					eventDate: eventDate
	        	},
	        	expected = {
		        	distance: distance,
		        	raceName: raceName,
		        	eventDate: eventDate
	        	};

			expect(selectedRace(state, action).raceDetails).toEqual(expected);
		});
	});

	describe('tableReducer', () => {
		it('should start with default table', () => {
			//Need to work out how to do this properly
		});
	});

	describe('showLocations', () => {
		it('should start with default false', () => {
			expect(selectedRace(undefined, {}).showLocations).toBe(false);
		});

		it('should handle SINGLE_RACE_TABLE_LOCATIONS_CLICKED', () => {
			var action = {
				type: actions.SINGLE_RACE_TABLE_LOCATIONS_CLICKED
	        };

			expect(selectedRace({showLocations: false}, action).showLocations).toBe(true);
			expect(selectedRace({showLocations: true}, action).showLocations).toBe(false);
		});
	});
});
