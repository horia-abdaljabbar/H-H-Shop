import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import  './Navbar.css'


function Navbar() {
  return (
<>
<div className="hero">
<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand w-25" href="#" >
    <img className="navbar-logo" src="logo.svg" alt="Logo" width="120" ></img>    
    </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Catagories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" >Cart</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" >Products</Link>
        </li>
      </ul>
      <div className="d-flex gap-4">
      <NavLink className="signInUp-link  pt-1 pb-1" to="">SignIn</NavLink>
      <NavLink className="signInUp-link  pt-1 pb-1"  to="" >SignUp</NavLink>
      </div>
    </div>
  </div>
</nav>
{/* <h1 className='heroInfo'>welcome </h1> */}

    </div>
  
</>


  )
}

export default Navbar