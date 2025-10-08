import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', 
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App


