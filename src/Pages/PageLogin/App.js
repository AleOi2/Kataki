import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignInForm from '../../Components/LoginPass/LoginPassW';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router basename="/teste/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
              <SignInForm></SignInForm>           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
