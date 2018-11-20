import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Landing from './Landing';
import App from './App';
import logo from './logo.svg';

const routing = (
  <Router>
    <div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href='/'>
          <code>Partychat</code>
        </a>
      </header>

      <Route exact path="/" component={Landing} />
      <Route exact path="/:roomname" component={App} />

    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));