import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Components/Home.js'
import Login from './Components/Login'
import Search from './Components/Search'
function App() {
  return (
    <>
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/Search'>Search</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/Login'>
          <Login/>
        </Route>
        <Route path='/Search'>
          <Search/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
