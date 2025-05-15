import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {
  const [logstatus, setLogstatus] = useState("Login");
  const [dummy, setDummy] = useState("dummy");

  useEffect(()=>{
    console.log("useEffect called");
  }, [dummy]);
  console.log("Header rendered");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn"
            onClick={() => {
              logstatus === "Login" ? setLogstatus("Logout"): setLogstatus("Login");
            }}
          >
            {logstatus}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
