import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute' 

import Login from './components/Login'
import Friends from './components/Friends'

function App() {
  return (
    
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path ='/friends'>
              <Friends/>
          </PrivateRoute>
          <Route path='/login' component={Login}/> {""}
          <Route component={Login} />
        </Switch>
        </div>
      </Router>
     
  );
}

export default App;
