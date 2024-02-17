import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom"
import Login from './routes/Login.jsx'
import Authentication from './routes/Authentication.jsx'
import Profile from './routes/Profile.jsx'
import Home from './routes/Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <Authentication>
              <Home />
            </Authentication>
          }
        />
        <Route
          path="profile"
          element={
            <Authentication>
              <Profile />
            </Authentication>
          }
        />
      </Routes>
    </>
  )
}

export default App
