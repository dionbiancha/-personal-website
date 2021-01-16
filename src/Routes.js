import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default () => {
  return (
    <Switch>
      <Route exact path="/personal-website/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};