import "./Flat.css";
import { Link } from "react-router-dom";

function Flat() {
  return (
    <div className="flat">
      <Link to="/flat">
        <div className="flat-content">Titre de la location</div>
      </Link>
    </div>
  );
}

export default Flat;
