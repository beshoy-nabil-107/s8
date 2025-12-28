import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Profile from './assets/pages/Profile'
import NotFound from './assets/pages/NotFound'

export default function App() {
  return (
    <div className='app-container'>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>


      </div>


    <h1>AMIT</h1>
    

      <div className="main-container">

        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/profile' Component={Profile} />
          <Route path='*' Component={NotFound} />



        </Routes>

      </div>


    </div>
  )
}
