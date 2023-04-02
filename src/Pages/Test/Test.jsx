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
    
    <div className={animationClass}>
      <nav>
  {/* <OtherNavbar /> */}
  <div class="logo">
    <a href="#">
      <img src={eye} alt="Logo" />
    </a>
  </div>
  <ul className={`menu ${menuVisible ? "visible" : ""}`}>
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
  </div>
</nav>

      <Mood />
    </div>
  );

  // You can also return the following if you want to add some text to the component:
  // return (
  //   <div className={animationClass}>
  //     <h1>My Animated Background</h1>
  //     <p>This is some text that goes with the animation</p>
  //   </div>
  // );
}

export default Test;
