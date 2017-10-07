import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';
import Authenticate from './auth/Authenticate';
import Landing from './landing/Landing';
import Playlist from './playlist/Playlist';
import NewsFeed from './newsFeed/NewsFeed';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/home" component={Playlist}/>
      <PrivateRoute path="/newsFeed" component={NewsFeed}/>
      <Route path="/authenticate" component={Authenticate}/>
    </div>
  </Router>
);

export default App;
