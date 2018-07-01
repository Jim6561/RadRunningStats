import { call, put, select } from 'redux-saga/effects'
import { receiveSelectedRaceResults_success, receiveSelectedRaceResults_failed } from '../actions/actionCreators'
import { replaceDataTypes } from './serverTranslationUtil'

export default function* resultFetcher (action) {
  console.log('fetching one race');
  //I think this yield is important. If gives the reducer chance to set the state.
  //Cos we have two things listening to sincleRaceClicked
  let raceId = yield select(state => state.selectedRace.raceId);
  let queryUrl = 'runner?raceId=' + raceId;
  let req = {
    method: 'GET'
  };

  try {
    const response = yield call(fetch, queryUrl, req),
          responseData = yield response.json();
    yield call(replaceDataTypes, responseData);
    yield put(receiveSelectedRaceResults_success(responseData));

  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err));
    yield put(receiveSelectedRaceResults_failed(err));
  }
}
