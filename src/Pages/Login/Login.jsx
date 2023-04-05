import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    navigate('/'); // Navigate to the main page
  };

  return (
    <div className="login">
        <span className="login__title">Sign In</span>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label">Username</label>
        <input type="text" className="login__input" placeholder="Enter your username"></input>
        <label className="login__label">Password</label>
        <input type="password" className="login__input" placeholder="Enter your password"></input>
        <button className="login__buttonLogin">Login</button>
        {/* <button className="login__buttonRegister">Register</button> */}
      </form>
    </div>
  );
}
