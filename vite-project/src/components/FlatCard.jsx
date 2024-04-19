import "./FlatCard.css";
import { Link } from "react-router-dom";

function FlatCard() {
  return (
    <div className="flat">
      <Link to="/flat">
        {/* <div className="flat-image">
          <img
            src="/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
            alt="appartement"
          /> */}
        <div className="flat-content">Titre de la location</div>
        {/* </div> */}
      </Link>
    </div>
  );
}

export default FlatCard;
