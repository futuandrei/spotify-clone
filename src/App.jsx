// import React from "react";
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display.jsx'
// --- > Moved following lines from Display.jsx  --- >
// import { Route, Routes } from "react-router-dom";
// --- > Added BrowserRouter to line --- >
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import DisplayHome from "./DisplayHome";

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
     
    </div>
  )
}

export default App;