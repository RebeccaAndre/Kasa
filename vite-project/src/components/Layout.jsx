import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Main.css"; // Assurez-vous que le chemin est correct

function Layout() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />{" "}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
