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
import { useParams, useNavigate } from "react-router-dom";
import AppartementPageHeader from "../components/AppartementPageHeader";
import DescriptionPanel from "../components/DescriptionPanel";
import AppartementEquipement from "../components/AppartementEquipement";
import "./AppartementPage.css";
import ImageCarousel from "../components/ImageCarousel";

function AppartementPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appartement, setAppartement] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const found = data.find((item) => item.identifiant === id);
        if (!found) {
          navigate("/404", { replace: true });
        } else {
          setAppartement(found);
        }
      })
      .catch((error) => {
        console.error("Erreur de récupération :", error);
        navigate("/404", { replace: true });
      });
  }, [id, navigate]);

  if (!appartement) {
    return <div>Chargement...</div>;
  }
  return (
    <div className="appartement-page">
      <ImageCarousel pictures={appartement.pictures} />
      <AppartementPageHeader
        title={appartement.title}
        location={appartement.location}
        tags={appartement.tags || []} // Si pas de tags, on met un tableau vide pour éviter les erreurs
        host={appartement.hôte}
        rating={parseInt(appartement.note)}
      />
      <div className="appartement-page__details">
        <DescriptionPanel
          title="Description"
          description={appartement.description}
        />
        <AppartementEquipement equipment={appartement.equipement} />
      </div>
    </div>
  );
}

export default AppartementPage;
