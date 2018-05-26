import { call, put, select } from 'redux-saga/effects'
import { receiveResults_success, receiveResults_failed } from '../actions/actions'

export default function* resultFetcher (action) {
  let runnerName = yield select(state => state.runnerName);
  let queryUrl = 'runner?name=' + runnerName;
  let req = {
    method: 'GET'
  };

  try {
    const response = yield call(fetch, queryUrl, req),
          responseJson = yield response.json(),
          results = responseJson;

    yield put(receiveResults_success(responseJson));

  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
    yield put(receiveResults_failed(err));
  }
}
