import React, { useState } from "react";
import "./Test.scss";
import eye from "../../Assets/eye.svg";
import Mood from "../Mood/Mood.jsx";
// import OtherNavbar from "../../Components/OtherNavbar/OtherNavbar";

function Test() {
  const [animationClass, setAnimationClass] = useState("test");
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  return (
    <section className="mood">
      <div className="mood__container">
    <div className={animationClass}>
   
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
      </div>
    </div>
    </section>
  );

}

export default Test;
