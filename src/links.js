import React from 'react'
import {Animatepresence } from 'framer-motion'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Login from './components/login'
import Main from './components/main'


const Links = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
    </Routes>
    </>
  )
}

export default Links
