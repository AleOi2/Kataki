import React from 'react';
import './App.css';
import Head from '../../Components/Header/Head';
import LoginPass from '../../Components/LoginPass/LoginPassW'
import Foot from '../../Components/Footer/Foot';
import ThemeSwitcher from '../../Components/Switcher/ThemeSwitcher';
import SideBar from '../../Components/Side/Sidebar1';
import NavBar from '../../Components/Nav/NavBar';
import { Button } from 'react-bootstrap'

// Página de Login
function App() {
  return (
    <div>
        <Head altura = '100px' cor='#30a64f'></Head>
        <LoginPass></LoginPass>
        {/* <Foot></Foot> */}

    </div>
    )
  }


function Teste(){
  console.log("Este é um teste em react");
}


export default App;
