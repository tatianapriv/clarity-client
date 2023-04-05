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

function App() {
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
