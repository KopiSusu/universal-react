/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import {
  app,
  home,
  notFound,
} from './containers';

export default (store) => { // eslint-disable-line
  return (
    <Route path="/" component={app}>
      { /* Home (main) route */ }
      <IndexRoute component={home} />

      { /* Catch all route */ }
      <Route path="*" component={notFound} status={404} />
    </Route>
  );
};