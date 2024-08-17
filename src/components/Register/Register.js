import { useState } from "react";
import "./Resgister.css";
import axios from "axios";

const RegisterComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        setMessage("Registration Successful");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        setMessage("Error registering user");
      });
  };

  return (
    <div className="login-page">
      <div className="login-panel">
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="label-container">
              <label className="form-label">Username</label>
            </div>
            <div className="username-input">
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="label-container">
              <label className="form-label">Email</label>
            </div>
            <div className="username-input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="password-container">
              <label className="form-label">Password</label>
            </div>
            <div className="password-input">
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <input
            type="submit"
            value="Register"
            className="btn active float-right"
          ></input>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default RegisterComponent;
