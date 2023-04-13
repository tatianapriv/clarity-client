import "./Tracker.scss";
import { Link } from "react-router-dom";
import Mood from "../Mood/Mood.jsx";

function Tracker() {
  return (
    <>
      <div className="nav">
        <div className="nav__logo">
          <Link to="/">Clarity</Link>
        </div>

        <div className="nav__container">
          <ul className="nav__items">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="mood">
        <Mood />
      </section>
    </>
  );
}

export default Tracker;
