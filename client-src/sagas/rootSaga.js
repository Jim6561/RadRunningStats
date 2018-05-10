import { takeEvery } from 'redux-saga/effects'

import { RESULTS_REQUESTED } from '../actions/actions'
import resultFetcher from './resultFetcher'

export default function* rootSaga() {
  yield takeEvery(RESULTS_REQUESTED, resultFetcher)
}
