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
import Photos from '../pages/photos';
import Donations from '../pages/donations';
import Visits from '../pages/visits';
import Work from '../pages/work';
import Projects from '../pages/projects';
import Training from '../pages/training';
import TechArticles from '../pages/tech-articles';
import TravelArticles from '../pages/travel-articles';
import Videos from '../pages/videos';
import Slides from '../pages/slides';
import Error from '../pages/error';

const appHistory = useRouterHistory(createHashHistory)();

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Home} />
      <Route path = "aboutme" component = {AboutMe} />

      <Route path = "work" component = {Work}>
        <Route path = "projects" component = {Projects} />
        <Route path = "training" component = {Training} />
        <Route path = "articles" component = {TechArticles} />
        <Route path = "videos" component = {Videos} />
        <Route path = "slides" component = {Slides} />
      </Route>

      <Route path = "hobby" component = {Hobby}>
        <IndexRedirect to="/hobby/photography" />
        <Route path = "photography" component = {Photography} />
        <Route path = "photos" component = {Photos} />
        <Route path = "donations" component = {Donations} />
        <Route path = "visits" component = {Visits} />
        <Route path = "articles" component = {TravelArticles} />
      </Route>
    </Route>
    <Route path="*" component={Error}/>
  </Router>
);


export default Routes;
