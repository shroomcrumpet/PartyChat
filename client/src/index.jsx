import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Landing from './Landing';
import App from './App';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/:roomname" component={App} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));