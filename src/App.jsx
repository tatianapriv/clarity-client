import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
// import Header from "./Components/Header/Header";
// import CircularSlider from "./Components/CircularSlider/CircularSlider";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
// import Main2 from "./Components/Main2/Main2"
// import Mood from "./Pages/Mood/Mood";
import Test from "./Pages/Test/Test";
// import MenuTest from "./Components/MenuTest/MenuTest";
// import { CiLinkedin } from "react-icons/ci";
// import { VscGithub } from "react-icons/vsc";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/mood" element={<Mood />} /> */}
          <Route path="/test" element={<Test />} />
          {/* <Route path="/menutest" element={<MenuTest />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
