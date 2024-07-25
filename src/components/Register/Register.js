import { Link } from "react-router-dom";
import "./Resgister.css";
const RegisterComponent = () => {
  return (
    <div className="login-page">
      <div className="login-panel">
        <form className="form-horizontal">
          <div className="form-group">
            <div className="label-container">
              <label className="form-label">Username</label>
            </div>
            <div className="username-input">
              <input placeholder="username" />
            </div>
          </div>
          <div className="form-group">
            <div className="label-container">
              <label className="form-label">Email</label>
            </div>
            <div className="username-input">
              <input placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <div className="password-container">
              <label className="form-label">Password</label>
            </div>
            <div className="password-input">
              <input placeholder="password" />
            </div>
          </div>
          <div className="form-group">
            <div className="password-container">
              <label className="form-label">Confirm Password</label>
            </div>
            <div className="password-input">
              <input placeholder="confirm password" />
            </div>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn active float-right"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
