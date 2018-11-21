import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import Landing from './components/Landing';
import App from './components/App';

import react_logo from './react_logo.svg';


const routing = (
  <Router>
    <div>

      <header className="App-header">
        <img src={react_logo} className="App-logo" alt="logo" />
        <a href='/'>
          <code>Partychat</code>
        </a>
      </header>

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/:roomname" component={App} />
      </Switch>

    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));