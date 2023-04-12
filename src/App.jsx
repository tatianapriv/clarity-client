import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import "./App.scss";
// import Header from "./Components/Header/Header";
// import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Test from "./Pages/Test/Test";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
// import { CiLinkedin } from "react-icons/ci";
// import { VscGithub } from "react-icons/vsc";
import { useEffect } from "react";


function App() {

  const pathname = window.location.pathname;
  useEffect(() => {
    document.body.style.backgroundImage = `url(${
      pathToImages[pathname] || "./07.jpg"
    })`;
  }, [pathname]);

  const pathToImages = {
    "/": "../11.jpg",
    "/user": "../03.jpg",
    "/test": "../07.jpg"
  };

  return (
    <div className="App">
      {/* <Navbar /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/mood" element={<Mood />} /> */}
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
