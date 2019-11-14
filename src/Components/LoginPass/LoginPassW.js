import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import './LoginPassW.css'

class LoginPassW extends Component {
    constructor() {
        super();

        this.state = {
            user: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div>
          <div className="FormTitle">
            <div className="FormTitle__Link">Sign In</div> 
          </div>       

          <div className="FormCenter">
              <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Login</label>
                  <input type="text" id="email" className="FormField__Input" placeholder="Enter your username" name="user" value={this.state.user} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <button className="FormField__Button mr-20">Entrar</button> 
                </div>
              </form>
            </div>
        </div>
        );
    }
}

export default LoginPassW;