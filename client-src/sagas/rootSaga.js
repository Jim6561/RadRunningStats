import { takeEvery } from 'redux-saga/effects'

import { RESULTS_REQUESTED, RACES_REQUESTED } from '../actions/actions'
import resultFetcher from './resultFetcher'
import raceFetcher from './raceFetcher'

export default function* rootSaga() {
  yield takeEvery(RESULTS_REQUESTED, resultFetcher)
  yield takeEvery(RACES_REQUESTED, raceFetcher)
}
