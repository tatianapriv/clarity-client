import "./Register.scss";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate('/'); // Navigate to the main page
  };
  return (
    <div className="register">
      <span className="register__title">Sign Up</span>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label">Username</label>
        <input
          type="text"
          className="register__input"
          placeholder="Choose username"
        ></input>
        <label className="register__label">Email</label>
        <input
          type="text"
          className="register__input"
          placeholder="Enter your email"
        ></input>
        <label className="register__label">Password</label>
        <input
          type="password"
          className="register__input"
          placeholder="Enter your password"
        ></input>
        <button className="register__buttonRegister">Register</button>
        {/* <button className="register__buttonLogin">Login</button> */}
      </form>
    </div>
  );
}
