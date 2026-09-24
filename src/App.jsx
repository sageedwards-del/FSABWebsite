import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Body, Footer}  from './components.jsx'
import './style.css';

function App() {

  //{/*Sets isDarkMode, setIsDarkMode to false*/}
  const [isDarkMode, setIsDarkMode] = useState(false);

  //{/*Arrow function that toggles isDarkMode btw true/false when called(! is opposite)*/}
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    darkPhoto(!isDarkMode);
  };

  //{/*If darkmode is true, then use dark-theme, otherwise use light-theme*/}
  return (
    <>
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>

   <Body/>
     <img src={isDarkMode ? 'brownatnight.jpeg' : 'brown at day.jpg'} width = {300} height = {200} alt = {"no"} style={{padding: '20px'}}></img>

    <hr></hr>
   <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <button onClick ="">Click to do nothing!</button>
  
  <hr></hr>
    </div>
    </>

  ); 
}

export default App
