import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../../containers/Layout';
import Questions from '../../containers/Questions';
import Result from '../../containers/Result';

const NotFound = () => <h1>404...Page Not Found</h1>;

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Questions} />
    <Route path="questions" component={Questions} />
    <Route path="result" component={Result} />
    <Route path="*" component={NotFound} />
  </Route>
);
