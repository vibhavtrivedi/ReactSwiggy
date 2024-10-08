import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [btnSwitch, setBtnSwitch] = useState("Login");
  const { loginName } = useContext(UserContext);
  const storeItems = useSelector((store) => store.cart.items);
  console.log("store items", storeItems);
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="image">
        <Link to="/">
          <img className="res-logo" alt="logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart {storeItems.length}</Link>
          </li>
          <li>
            <Link to="/login">{btnSwitch}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
