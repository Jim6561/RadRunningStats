import { takeEvery } from 'redux-saga/effects'

import { RESULTS_REQUESTED, RACES_REQUESTED, SINGLE_RACE_CLICKED } from '../actions/actions'
import resultFetcher from './resultFetcher'
import raceFetcher from './raceFetcher'
import oneRaceFetcher from './oneRaceFetcher'

export default function* rootSaga() {
  yield takeEvery(RESULTS_REQUESTED, resultFetcher);
  yield takeEvery(RACES_REQUESTED, raceFetcher);
  yield takeEvery(SINGLE_RACE_CLICKED, oneRaceFetcher);
}
