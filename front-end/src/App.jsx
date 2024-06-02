import React from 'react'
import Home from './components/Home'
import Homi from './components/Homi'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homi />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
