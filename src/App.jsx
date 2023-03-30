import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./Components/Header/Header";
import CircularSlider from "./Components/CircularSlider/CircularSlider";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Pages/Main/Main";
import Mood from "./Pages/Mood/Mood";
import Test from "./Pages/Test/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
