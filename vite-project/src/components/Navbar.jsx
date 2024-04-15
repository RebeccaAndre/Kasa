import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src="LOGO.png" alt="logo" />
      </div>
      <div className="navbarMenu">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeNavLink" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "activeNavLink" : "")}
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
