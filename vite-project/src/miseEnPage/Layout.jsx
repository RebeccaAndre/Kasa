import Navbar from "../components/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Main.css";
import "./GlobalStyles.css";

function Layout() {
  return (
    <>
      <div className="global-container">
        <Navbar />
        <div className="main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
