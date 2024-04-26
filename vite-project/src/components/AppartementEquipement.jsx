// import "./AppartementEquipement.css";

// function AppartementEquipement() {
//   return (
//     <div className="appartement-page__equipement">
//       <h4>
//         <span>Équipements</span>
//         <i className="fa-solid fa-chevron-down chevron"></i>
//       </h4>
//       <p className="equipement">
//         Climatisation, Wi-Fi, Cuisine, Espace de travail, Fer à repasser,
//         Sèche-cheveux, Cintres.
//       </p>
//     </div>
//   );
// }

// export default AppartementEquipement;

// import "./AppartementEquipement.css";
// import PropTypes from "prop-types";

// function AppartementEquipement({ equipment }) {
//   return (
//     <div className="appartement-page__equipement">
//       <h4>
//         <span>Équipements</span>
//         <i className="fa-solid fa-chevron-down chevron"></i>
//       </h4>
//       <ul className="equipement">
//         {equipment.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// AppartementEquipement.propTypes = {
//   equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default AppartementEquipement;

import { useState } from "react";
import "./AppartementEquipement.css";
import PropTypes from "prop-types";

function AppartementEquipement({ equipment }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="appartement-page__equipement">
      <h4 onClick={() => setIsOpen(!isOpen)}>
        <span>Équipements</span>
        <i
          className={`fa-solid fa-chevron-${isOpen ? "down" : "up"} chevron`}
        ></i>
      </h4>
      {isOpen && (
        <ul className="equipement">
          {equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

AppartementEquipement.propTypes = {
  equipment: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AppartementEquipement;
