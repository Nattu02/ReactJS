import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [logstatus, setLogstatus] = useState("Login");

  const onlineStatus = useOnline();

  return (
    <div className="flex justify-between items-center border-2 border-gray-300 bg-green-50">
      <div className="flex justify-center items-center">
        <img src={LOGO_URL} className="h-30" alt="Logo"></img>
        <h2 className="text-3xl text-amber-500 italic font-bold -ml-8 ">
          ClickBite
        </h2>
      </div>
      <div>
        <ul className="flex items-center mx-4">
          <li className="px-5 text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 text-xl font-bold">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-5 text-xl font-bold">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-5 text-xl font-bold">Cart</li>
          <li className="text-xl font-bold px-3 py-1 border-2 border-gray-600 rounded-lg">
            <button
              onClick={() => {
                logstatus === "Login"
                  ? setLogstatus("Logout")
                  : setLogstatus("Login");
              }}
            >
              {logstatus}
            </button>
          </li>
          <li className="px-5 text-xl font-bold">
            User status: {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
