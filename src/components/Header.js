import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnSwitch, setBtnSwitch] = useState("Login");

  useEffect(() => {
    console.log("Use effect is called");
  }, [])
  return (
    <div className="header">
      <div className="image">
        <img className="res-logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li
            // onClick={() => {
            //   btnSwitch === "Login" ? setBtnSwitch("Logout") : setBtnSwitch("Login");
            // }}
            // className="logout-btn"
          >
            <Link to="/login">{btnSwitch}</Link>
            
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
