import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from './components/Search';
import Saved from './components/Saved';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <switch>
           <Route exact path="/" component={Search} />
           <Route path="/saved" component={Saved} />
       
          </switch>
        </div>

      </Router>


      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/
    );
  }
}

export default App;
