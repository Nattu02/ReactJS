import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/aBOUT.JS";
import { createBrowserRouter, RouterProvider } from "react-router";

const root = ReactDom.createRoot(document.getElementById("root"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(<RouterProvider route = {Router} />);
