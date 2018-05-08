import { call, put } from 'redux-saga/effects'
import { receiveResults_success } from '../actions/actions'

export default function* resultFetcher (action) {
  let runnerName = 'sam';
  let queryUrl = 'runner?name=' + action.runnerName;
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
    //Should yield something here
  }
}
