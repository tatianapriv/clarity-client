import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./Pages/Main/Main";
import Tracker from "./Pages/Tracker/Tracker";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import BackgroundChanger from "./Components/BackgroundChanger/BackgroundChanger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BackgroundChanger>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BackgroundChanger>
      </BrowserRouter>
    </div>
  );
}

export default App;
