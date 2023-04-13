import React, { useState } from "react";
import "./Test.scss";
import { Link } from "react-router-dom";

import Mood from "../Mood/Mood.jsx";
// import OtherNavbar from "../../Components/OtherNavbar/OtherNavbar";

function Test() {


  return (
    <>
 
 <div className="nav">
        <div className="nav__logo">
            <Link to="/">Clarity</Link>
          </div>

          <div className="nav__container">
            <ul className="nav__items">
              <li className="nav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>

      <section className="mood">
        {/* <div className="mood__container"> */}
        {/* <div className={animationClass}> */}

        {/* <ul className={`menu ${menuVisible ? "visible" : ""}`}>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
  <div class="hamburger-menu" onClick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div> */}

        <Mood />
        {/* </div> */}
        {/* </div> */}
      </section>

    </>
  );
}

export default Test;
