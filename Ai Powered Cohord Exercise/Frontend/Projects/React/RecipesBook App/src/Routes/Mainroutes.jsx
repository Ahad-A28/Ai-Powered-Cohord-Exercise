import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Create from '../components/Create'
import Read from '../components/Read'

const Mainroutes = () => {
  return (
<Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/about" element={<About/>} />
 <Route path="/create" element={<Create/>} />
 <Route path="/details/:id" element={<Read/>} />
</Routes>
  )
}

export default Mainroutes