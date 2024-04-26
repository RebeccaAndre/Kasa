// function DescriptionPanel() {
//   return (
//     <div className="appartement-page__description">
//       <h4>
//         <span>Description</span>
//         <i className="fa-solid fa-chevron-down chevron"></i>
//       </h4>
//       <p className="description">
//         Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer
//         l&apos;été et à côté de nombreux bars et restaurants. Au cœur de Paris
//         avec 5 lignes de métro et de nombreux bus. Logement parfait pour les
//         voyageurs en solo et les voyageurs d&apos;affaires. Vous êtes à 1
//         station de la gare de l&apos;est (7 minutes à pied).
//       </p>
//     </div>
//   );
// }

// export default DescriptionPanel;

// import "./DescriptionPanel.css";
// import PropTypes from "prop-types";

// function DescriptionPanel({ description }) {
//   return (
//     <div className="appartement-page__description">
//       <h4>
//         <span>Description</span>
//         <i className="fa-solid fa-chevron-down chevron"></i>
//       </h4>
//       <p className="description">{description}</p>
//     </div>
//   );
// }

// DescriptionPanel.propTypes = {
//   description: PropTypes.string.isRequired,
// };

// export default DescriptionPanel;

// import { useState } from "react";
// import "./DescriptionPanel.css";
// import PropTypes from "prop-types";

// function DescriptionPanel({ description }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="appartement-page__description">
//       <h4 onClick={() => setIsOpen(!isOpen)}>
//         <span>Description</span>
//         <i
//           className={`fa-solid fa-chevron-${isOpen ? "down" : "up"} chevron`}
//         ></i>
//       </h4>
//       {isOpen && <p className="description">{description}</p>}
//     </div>
//   );
// }

// DescriptionPanel.propTypes = {
//   description: PropTypes.string.isRequired,
// };

// export default DescriptionPanel;

import "./DescriptionPanel.css";
import PropTypes from "prop-types";
import { useState } from "react";

function DescriptionPanel({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className="description-panel">
    <div className="appartement-page__description">
      <h4 onClick={() => setIsOpen(!isOpen)}>
        {title}
        <i
          className={`fa-solid fa-chevron-${isOpen ? "down" : "up"} chevron`}
        ></i>
      </h4>
      {isOpen && <p className="description">{description}</p>}
    </div>
  );
}

DescriptionPanel.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DescriptionPanel;
