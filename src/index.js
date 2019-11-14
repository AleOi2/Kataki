import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './Pages/PageLogin/App';
/* ReactDOM.render(<App />, document.getElementById('root'));*/

ReactDOM.render((
    <Router>
      <Switch>
        <Route exact path="/" name="Login Page" component={App} />
        {/* <Route path="/admin" name="Admin" component={AdminFull} />
        <Route path="/" name="Inicio" component={Full} /> */}
      </Switch>
    </Router>
  ), document.getElementById('root'));


