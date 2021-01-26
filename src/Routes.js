import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default () => {
  return (
    <Switch>
      <Route exact path="/personal-website-prototype">
        <Redirect to="/"/>
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
