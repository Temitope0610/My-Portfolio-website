import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ReactTypingEffect from 'react-typing-effect';
// import Typewriter from 'typewriter-effect/dist/core';
import './App.css';
import Splashpage from './pages/splashpage';
import Uipage from './pages/uipage';
import 'animate.css/animate.min.css'
import 'wow.js'
import FrontendPage from './pages/frontendpage';

function App() {
  return (
      <div>
        <Router>
            <Switch>
                <Route path='/' exact ><Splashpage/></Route>
                <Route path='/uipage'><Uipage/></Route>
                <Route path='/frontendpage'><FrontendPage/></Route>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
