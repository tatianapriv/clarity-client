import React from "react";
// import Navbar from "../../Components/Navbar/Navbar";
import "./Main.scss";
// import Header from "../../Components/Header/Header";
import clarity from "../../Assets/Icons/sunsets.png";
import brain from "../../Assets/Icons/bulb.png";
import check from "../../Assets/Icons/check.png";
import journal from "../../Assets/Icons/creativity.png";

export default function Main() {
  return (
    <>
      {/* <Navbar />  */}

      <section className="main">
        <div className="nav">
          <div className="nav__logo">Clarity</div>
        
          <div className="nav__container">
            <ul className="nav__items">
              <li className="nav__item">
                <a className="nav__link" href="#">Home</a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="content">
        <img className="nav__img "src={clarity} alt="sun" />
          <h1>Focused Mind, Peaceful Heart</h1>
          <p>
            {" "}
            Welcome to Clarity, a web-based application designed to help you
            navigate the vast and ever-changing landscape of your emotional
            well-being. Like the stars that dot the night sky, our emotions can
            seem distant and difficult to understand. But just as astronomers
            study the movements of celestial bodies to unlock the secrets of the
            universe, Clarity helps you track and reflect on your moods and
            emotions to gain a deeper understanding of yourself. Our platform
            acts as a compass, guiding you through the tumultuous seas of mental
            health. By logging your mood and associated emotions, you can chart
            the ebb and flow of your innermost feelings. Our intuitive chart
            acts as a lighthouse, illuminating the patterns and triggers that
            affect your well-being over time. Just as a seed needs the warmth of
            the sun and the nourishment of the soil to grow, your emotional
            well-being requires care and attention. Clarity provides a safe and
            nurturing environment for you to explore your emotions, identify
            areas of improvement, and develop strategies to manage your mental
            health.
          </p>
          

          <div className="bubbles">
            <div className="bubbles__reflect">
              <div className="bubbles__container">
          <h3 className="bubbles__title">Reflect</h3>
          <img src={brain} alt="brain and lightbulb" className="bubbles__picture" />
          </div>
          <p className="bubbles__text">Identify how you feel right now with the help of the mood wheel.</p>
          </div>
          <div className="bubbles__track">
            <div className="bubbles__container">
          <h3 className="bubbles__title">Track</h3>
          <img src={check} alt="brain and lightbulb" className="bubbles__picture" />
          </div>
          <p className="bubbles__text">Log your mood and see it displayed at a chart, get clarity how much your mood changes overtime.</p>
          </div>
          <div className="bubbles__journal">
          <div className="bubbles__container">
          <h3 className="bubbles__title">Journal</h3>
          <img src={journal} alt="brain and lightbulb" className="bubbles__picture" />
          </div>
          <p className="bubbles__text">What happened today that made you feel this way? Write about your experiences to get better understanding of what exactly affects your wellbeing. </p>
        </div>
        </div>
        </div>

       
      </section>
    </>
  );
}
