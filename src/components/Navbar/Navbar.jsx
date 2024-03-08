import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

function Navbar() {
  console.log();
  let location = useLocation();
  let [backGroundImg, setbackGroundImg] = useState("");
  let [aboveContent, setAboveContent] = useState("");

  useEffect(() => {
    if (location.pathname == "/Home") {
      setbackGroundImg("hero/home.jpg");
      setAboveContent("home");
    } else if (location.pathname == "/Cart") {
      setbackGroundImg("hero/new.jpg");
      setAboveContent("cart");
    } else if (location.pathname == "/Categories" ) {
      setbackGroundImg("hero/l.jpg");
      setAboveContent("cate");
    } else if (location.pathname == "/Products") {
      setbackGroundImg("hero/ss.jpg");
    } else if (location.pathname == "/Login" || location.pathname == "/Register") {
      setbackGroundImg("hero/ss.jpg");
    } else {
      setbackGroundImg("hero/oops.jpg");
      setAboveContent("404!!! Page Not Found");
      // document.getElementById('hero').removeAttribute('style');

      
    }
  }, [location.pathname]);

  return (
    <>
      {/* <div
        className="hero"
        style={{ backgroundImage: `url(${backGroundImg})` }}
      > */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand w-25" href="#">
                <img
                  className="navbar-logo"
                  src="/logo.svg"
                  alt="Logo"
                  width="120"
                ></img>
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Categories">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Cart">
                    Cart
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Products">
                    Products
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex gap-4">
                <NavLink className="login-link  pt-1 pb-1" to="/Login">
                  Login
                </NavLink>
                <NavLink className="register-link  pt-1 pb-1" to="/Register">
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        {/* <h1 className="above">{aboveContent}</h1> */}
      {/* </div> */}
    </>
  );
}

export default Navbar;
