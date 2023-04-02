import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
// import Header from "./Components/Header/Header";
// import CircularSlider from "./Components/CircularSlider/CircularSlider";
import Navbar from "./Components/Navbar/Navbar";
// import Main from "./Pages/Main/Main";
// import Mood from "./Pages/Mood/Mood";
// import Test from "./Pages/Test/Test";
// import MenuTest from "./Components/MenuTest/MenuTest";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

function App() {
  return (
    <div className="App">
      <Navbar />

      <body>
     
        <div className="content">
          <h1>Focused mind, peaceful heart.</h1>
          <p>
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
        </div>
        <a href="" className="btn">
          Sign Up
        </a>
        {/* <div className="socials">
          <a href="https://linkedin.com" target="_blank">
            <CiLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <VscGithub />
          </a>
        </div> */}
      </body>
      {/* <BrowserRouter>
        <Navbar />
        <Header /> */}
      {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/test" element={<Test />} />
          <Route path="/menutest" element={<MenuTest />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
