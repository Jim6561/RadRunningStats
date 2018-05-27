import { call, put, select } from 'redux-saga/effects'
import { receiveRaces_success, receiveRaces_failed } from '../actions/actionCreators'
import { replaceDataTypes } from './serverTranslationUtil'

export default function* resultFetcher (action) {
  let queryUrl = 'race';
  let req = {
    method: 'GET'
  };

  try { 
    const response = yield call(fetch, queryUrl, req);
    const responseData = yield response.json();
    yield call(replaceDataTypes, responseData);


    yield put(receiveRaces_success(responseData));
  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
    yield put(receiveRaces_failed(err));
  }
}
