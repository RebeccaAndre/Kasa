import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src="LOGO.png" alt="logo" />
      </div>
      <div className="navbarMenu">
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">A propos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
