import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'


import TableHolder from './containers/TableHolder';
import RunnerSearchFormHolder from './containers/RunnerSearchFormHolder';

import myApp from './reducers';
import rootSaga from './sagas/rootSaga'
import resultFetcher from './sagas/resultFetcher'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(myApp, applyMiddleware(sagaMiddleware));

//for testing
/*const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)*/

sagaMiddleware.run(rootSaga)

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <RunnerSearchFormHolder/>
        <TableHolder/>
      </div>
    </Provider>
    ,document.getElementById('mount')
  );
});
