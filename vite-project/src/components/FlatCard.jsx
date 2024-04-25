import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FlatCard.css";

function FlatCard({ appartement }) {
  return (
    <div
      className="flat"
      style={{ backgroundImage: `url(${appartement.cover})` }}
    >
      <Link
        to={{
          pathname: `/flat/${appartement.identifiant}`,
          state: { appartement },
        }}
      >
        <div className="flat-content">{appartement.title}</div>
      </Link>
    </div>
  );
}

FlatCard.propTypes = {
  appartement: PropTypes.shape({
    identifiant: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    equipements: PropTypes.arrayOf(PropTypes.string).isRequired, // Assurez-vous d'inclure 'equipements' dans PropTypes
  }).isRequired,
};
export default FlatCard;
