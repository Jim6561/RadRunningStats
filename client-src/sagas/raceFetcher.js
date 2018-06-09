import { call, put, select } from 'redux-saga/effects'
import { receiveRaces_success, receiveRaces_failed } from '../actions/actionCreators'
import { replaceDataTypes } from './serverTranslationUtil'

const addPaceColumns = (data) => {
  data.map(row => {
    row['winning_pace'] = row.winning_time / row.distance_miles;
    row['first_quartile_pace'] = row.first_quartile_time / row.distance_miles;
    row['median_pace'] = row.median_time / row.distance_miles;
    row['third_quartile_pace'] = row.third_quartile_time / row.distance_miles;
    row['slowest_pace'] = row.last_time / row.distance_miles;
  });
};

export default function* resultFetcher (action) {
  let queryUrl = 'race';
  let req = {
    method: 'GET'
  };

  try { 
    const response = yield call(fetch, queryUrl, req);
    const responseData = yield response.json();
    yield call(replaceDataTypes, responseData);
    yield call(addPaceColumns, responseData);

    yield put(receiveRaces_success(responseData));
  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
    yield put(receiveRaces_failed(err));
  }
}
