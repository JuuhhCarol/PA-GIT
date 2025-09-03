import { useState } from 'react'
import './App.css'
import {browserRouter, Route} from 'react-router-dom'
import home from './components/home'
import about from './components/about'

function App() {
  return (
    <>
    <browserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    </browserRouter>
    </>
  )
}

export default app
