// import AppartementEquipement from "../components/AppartementEquipement";
// import "./AppartementPage.css";
// import ImageBanner from "../components/ImageBanner";
// import AppartementPageHeader from "../components/AppartementPageHeader";
// import DescriptionPanel from "../components/DescriptionPanel";

// function AppartementPage() {
//   return (
//     <div className="appartement-page">
//       <ImageBanner />
//       <AppartementPageHeader />
//       <div className="appartement-page__details">
//         <DescriptionPanel />
//         <AppartementEquipement />
//       </div>
//     </div>
//   );
// }

// export default AppartementPage;

import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ImageBanner from "../components/ImageBanner";
import AppartementPageHeader from "../components/AppartementPageHeader";
import DescriptionPanel from "../components/DescriptionPanel";
import AppartementEquipement from "../components/AppartementEquipement";
import "./AppartementPage.css";

function AppartementPage() {
  const { id } = useParams();
  const { state } = useLocation();
  const [appartement, setAppartement] = useState(null);

  useEffect(() => {
    if (state && state.appartement) {
      // Vérifiez si l'état de l'appartement est déjà disponible dans l'emplacement actuel
      setAppartement({
        // Utilisation de l'opérateur de décomposition pour copier les propriétés de l'objet 'state.appartement' dans le nouvel objet 'appartement'
        ...state.appartement,
        tags: state.appartement.tags,
        host: state.appartement.host,
        equipment: state.appartement.equipment,
      });
    } else {
      // Si l'état de l'appartement n'est pas disponible dans l'emplacement actuel, effectuez une requête pour obtenir les données de l'appartement
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          const found = data.find((item) => item.identifiant === id);
          if (found) {
            // Vérifiez si l'appartement a été trouvé
            setAppartement({
              ...found,
              tags: found["Mots clés"],
              host: found.hôte,
              equipment: found.equipement,
            });
          }
        })
        .catch((error) => console.error("Fetching error:", error));
    }
  }, [id, state]);

  if (!appartement) {
    return <div>Loading...</div>;
  }

  return (
    // Affichage des données de l'appartement si l'appartement est chargé
    <div className="appartement-page">
      <ImageBanner image={appartement.cover} />
      <AppartementPageHeader
        title={appartement.title}
        location={appartement.location}
        tags={appartement.tags}
        host={appartement.host}
        rating={parseInt(appartement.note)}
      />
      <div className="appartement-page__details">
        <DescriptionPanel
          title="Description"
          description={appartement.description}
        />
        {appartement.equipment ? (
          <AppartementEquipement equipment={appartement.equipment} />
        ) : (
          <p>No equipment available.</p>
        )}
      </div>
    </div>
  );
}

export default AppartementPage;
