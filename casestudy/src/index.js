import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {Router, browserHistory} from 'react-router';

import 'babel-polyfill'
import '../node_modules/'

let rootElement = document.getElementById('app');
let routesMarkup = Routes.getRoutes();
let rootMarkup = (
  <Router routes={routesMarkup} history={browserHistory}/>
);


ReactDOM.render(rootMarkup, rootElement);
