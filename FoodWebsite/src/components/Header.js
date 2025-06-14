import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logstatus, setLogstatus] = useState("Login");

  const onlineStatus = useOnline();

  const name = useContext(UserContext);
  const { userName } = name;

  const cart = useSelector((store) => store.cart.items);
  // console.log(cart);

  return (
    <div className="h-25 opacity-95 sticky top-0 right-0 left-0 z-10 flex justify-between items-center border-2 border-gray-300 bg-green-50">
      <div className="flex justify-center items-center">
        <img src={LOGO_URL} className="h-30" alt="Logo"></img>
        <Link
          to="/"
          className="text-3xl text-green-500 italic font-bold -ml-8 cursor-pointer"
        >
          Savoura
        </Link>
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
          <li className="px-5 text-xl font-bold">
            <Link to={"/cart"}>🛒 - {cart.length}</Link>
          </li>
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
            {logstatus === "Logout" ? userName : ""}
          </li>

          <li className="px-5 text-xl font-bold">
            {onlineStatus ? "✅" : "❌"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
