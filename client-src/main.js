import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import { createStore, applyMiddleware } from 'redux'
//import createSagaMiddleware from 'redux-saga'

//import rootReducer from './reducers'
//import rootSaga from './sagas/rootSaga'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <div>
      Jackpot
    </div>
    ,document.getElementById('mount')
  );
});
