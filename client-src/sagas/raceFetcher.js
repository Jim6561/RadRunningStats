import { call, put, select } from 'redux-saga/effects'
import { receiveRaces_success, receiveRaces_failed } from '../actions/actions'

export default function* resultFetcher (action) {
  let queryUrl = 'race';
  let req = {
    method: 'GET'
  };

  try { 
    const response = yield call(fetch, queryUrl, req);
    const responseJson = yield response.json();

    yield put(receiveRaces_success(responseJson));
  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
    yield put(receiveRaces_failed(err));
  }
}
