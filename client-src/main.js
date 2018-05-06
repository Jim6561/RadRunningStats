import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import AwesomeTable from './components/AwesomeTable';
//import {Provider} from 'react-redux';
//import { createStore, applyMiddleware } from 'redux'
//import createSagaMiddleware from 'redux-saga'

//import rootReducer from './reducers'
//import rootSaga from './sagas/rootSaga'

document.addEventListener('DOMContentLoaded', function() {

  var results = [{"race_name":"Springtime 10K/5K/1Mile","distance":"10K","event_date":"2018-04-07T00:00:00.000Z","name":"Jim Halley","sex":"M","age":38,"city":"Tallahassee","state":"FL","place":9,"div_tot":"2/43","div":"M35-39","bib_number":"845","net_time":2318,"gun_time":2318,"split_time":1156,"pace":373},{"race_name":"Springtime 10K/5K/1Mile","distance":"10K","event_date":"2018-04-07T00:00:00.000Z","name":"Jim Phillipa","sex":"M","age":52,"city":"Tallahassee","state":"FL","place":209,"div_tot":"19/36","div":"M50-54","bib_number":"846","net_time":3225,"gun_time":3288,"split_time":1713,"pace":530},{"race_name":"Springtime 10K/5K/1Mile","distance":"10K","event_date":"2018-04-07T00:00:00.000Z","name":"Jim Tully","sex":"M","age":71,"city":"Lamont","state":"FL","place":224,"div_tot":"3/11","div":"M70-99","bib_number":"652","net_time":3320,"gun_time":3322,"split_time":1629,"pace":535},{"race_name":"Springtime 10K/5K/1Mile","distance":"1M","event_date":"2018-04-07T00:00:00.000Z","name":"Jim Fillmore","sex":"M","age":52,"city":"Tallahassee","state":"FL","place":63,"div_tot":null,"div":null,"bib_number":"8932","net_time":727,"gun_time":727,"split_time":null,"pace":null},{"race_name":"Springtime 10K/5K/1Mile","distance":"5K","event_date":"2018-04-07T00:00:00.000Z","name":"Jimmy Stephens","sex":"M","age":57,"city":"Tallahassee","state":"FL","place":144,"div_tot":"15/29","div":"M50-59","bib_number":"1373","net_time":1803,"gun_time":1822,"split_time":null,"pace":587}];

  ReactDOM.render(
    <div>
      <AwesomeTable data={results}/>
    </div>
    ,document.getElementById('mount')
  );
});
