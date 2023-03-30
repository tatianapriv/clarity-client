import React, { useState } from "react";
import "./Test.scss";
import eye from "../../Assets/eye.svg";
import Mood from "../Mood/Mood.jsx";

function Test() {
  const [animationClass, setAnimationClass] = useState("test");

  return (
    <div className={animationClass}>
      <nav>
        <div class="logo">
          <a href="#">
            <img src={eye} alt="Logo" />
          </a>
        </div>
        <ul className="menu">
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
        <div class="hamburger-menu">
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
