import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Hero'

function Root() {
  return (
<>
<Navbar/> 
<Outlet/>
</>
)
}

export default Root