import { call, put, select } from 'redux-saga/effects'
import { receiveResults_success, receiveResults_failed } from '../actions/actionCreators'
import { replaceDataTypes } from './serverTranslationUtil'
import queryString from 'query-string'

export default function* resultFetcher (action) {
  let runnerName = yield select(state => state.results.runnerName);
  let runnerBib = yield select(state => state.results.runnerBib);
  let params = {name: runnerName, bib: runnerBib};
  let queryUrl = 'runner?' + queryString.stringify(params);
  let req = {
    method: 'GET'
  };

  try {
    const response = yield call(fetch, queryUrl, req),
          responseData = yield response.json();
          
    yield call(replaceDataTypes, responseData);
    yield put(receiveResults_success(responseData));

  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err));
    yield put(receiveResults_failed(err));
  }
}
