/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Routes,Route  } from 'react-router-dom'
import Signup from './Componenets/Sign'
import Login from './Componenets/Login'
import Home from './Componenets/Home'
function App() {
  return (
 <>
    <BrowserRouter>
    <Routes>
      <Route path='register' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
 </>
  )
}

export default App
