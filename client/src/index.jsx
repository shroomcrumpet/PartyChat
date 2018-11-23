import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { createStore, Actions, Selectors } from "@andyet/simplewebrtc";
import './index.scss';

import Landing from './components/Landing';
import App from './components/App';

import react_logo from './react_logo.svg';


const CONFIG_URL = `https://api.simplewebrtc.com/config/guest/${process.env.REACT_APP_RTC_API_KEY}`
const store = createStore();

window.store = store;
window.actions = Actions;
window.selectors = Selectors;


const routing = (
  <Router>
    <div>

      <Switch>

        <Route exact path="/">
          <div>
          {/*
            <header className="App-header">
              <img src={react_logo} className="App-logo" alt="logo" />
              <a href='/'>
                <code>Partychat</code>
              </a>
            </header>
          */}
            <Landing />
          </div>
        </Route>

        <Route exact path="/:roomname">
          <Provider store={store}>
            <App
              configUrl={CONFIG_URL}
              roomName={window.location.pathname.split("/").pop()}
            />
          </Provider>
        </Route>

      </Switch>

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));