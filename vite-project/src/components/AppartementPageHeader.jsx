// function AppartementPageHeader() {
//   return (
//     <div className="appartement__header">
//       <div>
//         <h1>Cozy loft on the Canal Saint-Martin</h1>
//         <h2>Paris, Île-de-France</h2>
//         <div className="appartement__tags">
//           <span>Cozy</span>
//           <span>Canal</span>
//           <span>Paris 10</span>
//         </div>
//       </div>
//       <div className="appartement-page__owner">
//         <div className="appartement-page__owner-info">
//           <h3>Alexandre Dumas</h3>
//           <div className="appartement-page__owner-badge"></div>
//         </div>
//         <div className="appartement-page__owner-stars">
//           <i className="fa-solid fa-star active"></i>
//           <i className="fa-solid fa-star active"></i>
//           <i className="fa-solid fa-star active"></i>
//           <i className="fa-solid fa-star inactive"></i>
//           <i className="fa-solid fa-star inactive"></i>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppartementPageHeader;

import "./AppartementPageHeader.css";
import PropTypes from "prop-types";

function AppartementPageHeader({ title, location, tags, host, rating }) {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-solid fa-star ${i < rating ? "active" : "inactive"}`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="appartement__header">
      <div>
        <h1>{title}</h1>
        <h2>{location}</h2>
        <div className="appartement__tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartement-page__owner">
        <div className="appartement-page__owner-info">
          <h3>{host.name}</h3>
          <div
            className="appartement-page__owner-badge"
            style={{ backgroundImage: `url(${host.photo})` }}
          ></div>
        </div>
        <div className="appartement-page__owner-stars">{renderStars()}</div>
      </div>
    </div>
  );
}

AppartementPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default AppartementPageHeader;
