import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
        <span className="login__title">Sign In</span>
      <form className="login__form">
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
