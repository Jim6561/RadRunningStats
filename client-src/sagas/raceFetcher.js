import { call, put, select } from 'redux-saga/effects'
import { receiveRaces_success } from '../actions/actions'

export default function* resultFetcher (action) {
  let queryUrl = 'race';
  let req = {
    method: 'GET'
  };

  try {
console.log('step 1');    
    const response = yield call(fetch, queryUrl, req);
console.log('step 2');    
    const responseJson = yield response.json();
console.log('step 3');    

    yield put(receiveRaces_success(responseJson));
console.log('step 4');    
  } catch(err) {
    console.error('Record fetch error: ' + JSON.stringify(err))
    //Should yield something here
  }
}
