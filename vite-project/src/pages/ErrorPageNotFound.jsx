import "./ErrorPageNotFound.css";
import Footer from "../miseEnPage/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function ErrorPageNotFound() {
  return (
    <>
      <div className="global-container">
        <Navbar />
        <div className="ErrorPageNotFound">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
          <Link to="/">
            <h3>Retournez à la page d&apos;accueil</h3>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPageNotFound;
