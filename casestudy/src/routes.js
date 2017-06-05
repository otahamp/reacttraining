import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/common/home'
import About from './components/common/about'
import App from './components/app'
import Books from './components/books/books'

class Routes {
  getRoutes() {
    return (
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/books" component={Books}></Route>
      </Route>
    );
  }
}

export default Routes
