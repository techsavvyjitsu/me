import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

// Import root app
import App from '../App';

// Import page level components
import Home from '../pages/home';
import AboutMe from '../pages/about-me';
import Hobby from '../pages/hobby';
import Photography from '../pages/photography';
import Donations from '../pages/donations';
import Visits from '../pages/visits';
import Error from '../pages/error';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "aboutme" component = {AboutMe} />
      <Route path = "hobby" component = {Hobby}>
        <IndexRedirect to="/hobby/photography" />
        <Route path = "photography" component = {Photography} />
        <Route path = "donations" component = {Donations} />
        <Route path = "visits" component = {Visits} />
      </Route>
    </Route>
    <Route path="*" component={Error}/>
  </Router>
);


export default Routes;
