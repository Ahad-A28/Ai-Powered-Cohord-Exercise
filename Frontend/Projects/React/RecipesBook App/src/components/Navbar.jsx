import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className=' flex justify-center gap-10 p-5 text-2xl font-bold '>
<NavLink to ="/" className={(e)=> e.isActive ? "text-red-300 underline ": ""} >Home</NavLink>
<NavLink to ="/create" className={(e)=> e.isActive ? "text-red-300 underline": ""} >Create a Recpie</NavLink>
<NavLink to ="/about"className={(e)=> e.isActive ? "text-red-300 underline": ""} >About</NavLink>


</nav>
  )
}

export default Navbar