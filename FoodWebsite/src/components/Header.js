import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [logstatus, setLogstatus] = useState("Login");

  const onlineStatus = useOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="Logo"></img>
        <h2 className="title">ClickBite</h2>
      </div>
      <div className="nav-items">
        <ul>
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="links">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <li className="links">
            {/* <Link to="/grocery">Grocery</Link> */}
          </li>
          <button
            className="login-btn"
            onClick={() => {
              logstatus === "Login"
              ? setLogstatus("Logout")
              : setLogstatus("Login");
            }}
            >
            {logstatus}
          </button>
            <li>User status: {(onlineStatus) ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
