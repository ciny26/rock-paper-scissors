import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Routes , Route } from 'react-router-dom'
import HomeView from './views/HomeView'
import GameRulesView from './views/GameRulesView'
function App() {
 

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" Component={HomeView}></Route>
        <Route path="/GameRules" Component={GameRulesView}></Route>


      </Routes>

    </>
  )
}

export default App
