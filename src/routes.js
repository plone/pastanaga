/**
 * Routes.
 * @module routes
 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './App';

/**
 * Routes function.
 * @function
 * @returns {Object} Routes.
 */
export default () => (
  <Route
    path="/"
    component={App}>
    <IndexRoute component={App} />
    <Route path="/**" component={App} />
    <Route path="*" status={404} />
  </Route>
);
