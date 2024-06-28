import { Link } from 'react-router-dom';
import './Login.css';
const LoginComponent = () => {
    return (
      <div className='login-page'> 
        <div className="login-panel">
        <form class="form-horizontal">
            <div className="form-group">
            <div className="label-container">
                <label className="form-label">Username</label>
            </div>
            <div className="username-input">
                <input placeholder="username" />
            </div>
            </div>
            <div className="form-group">
            <div className='password-container'>
                <label className="form-label">Password</label>
            </div>
            <div className='password-input'>
                <input placeholder="password" />
            </div>
            </div>
            <Link to="/register" className='register'>Register new account</Link>
            <input
            type="submit"
            value="Login"
            class="btn active float-right"
            ></input>
        </form>
        </div>
      </div>
  );
};

export default LoginComponent;
