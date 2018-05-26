import { call, put, select } from 'redux-saga/effects'
import { receiveRaces_success } from '../actions/actions'

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
    //Should yield something here
  }
}
