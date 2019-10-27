import React from 'react';
import './App.css';
import ThemeSwitcher from './ThemeSwitcher';
import SideBar from './Side/Sidebar1';
import NavBar from './NavBar';
import { Button } from 'react-bootstrap'

function App() {
  return (
    <div>
      <div className = "Nav-Menu">
        <NavBar></NavBar>

      </div>
      <div className = "Side-Menu">
        <SideBar></SideBar>
      </div>

    </div>
    )
  }

function Teste(){
  console.log("Este é um teste em react");
}


export default App;
