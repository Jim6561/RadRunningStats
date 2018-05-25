import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'


import PageHolder from './containers/PageHolder';

import myApp from './reducers';
import rootSaga from './sagas/rootSaga'
import { racesRequested } from './actions/actions'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(myApp, applyMiddleware(sagaMiddleware));

//for testing
/*const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)*/

sagaMiddleware.run(rootSaga)

store.dispatch(racesRequested());

document.addEventListener('DOMContentLoaded', function() {

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <PageHolder/>
      </div>
    </Provider>
    ,document.getElementById('mount')
  );
});
