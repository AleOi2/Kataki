import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class LoginPassW extends Component {
    render() {
        const ContainerStyle = {
            postion: 'relative',
            display: 'block',
            height : '200px',
            border : '2px solid red',
            justifyContent: 'center',
            alignItems: 'center'            

        }

        const Style = {
            postion: 'relative',
            display: 'flex',
            justifyContent: 'center',
            border : '2px solid blue',
            alignItems: 'center'            

        }
        return (
            <div style = {ContainerStyle}>
                <div style = {Style}>
                    PassWorld: 
                    <input name="txtSearch" type="text" />
                </div>
                <div style = {Style}>
                    PassWorld: 
                    <input name="txtSearch" type="text" />
                </div>

            </div>
        )
    }
}
export default LoginPassW;