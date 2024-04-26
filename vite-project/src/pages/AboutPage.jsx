// import ImageBanner from "../components/ImageBanner";
// import DescriptionPanel from "../components/DescriptionPanel";
// import "./AboutPage.css";

// function AboutPage() {

//   const imageUrl = "/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

//   return (
//     <>
//       <ImageBanner image={imageUrl} />
//       <div className="about-page__header">
//         <DescriptionPanel />
//         <DescriptionPanel />
//         <DescriptionPanel />
//         <DescriptionPanel />
//       </div>
//     </>
//   );
// }

// export default AboutPage;

import ImageBanner from "../components/ImageBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import "./AboutPage.css";

function AboutPage() {
  const imageUrl = "/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

  return (
    <>
      <ImageBanner image={imageUrl} />
      <div className="about-page__header">
        <DescriptionPanel
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <DescriptionPanel
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <DescriptionPanel
          title="Service"
          description="Nous nous engageons à fournir un service de qualité à nos utilisateurs. Notre service client est disponible 24/7 pour répondre à toutes vos questions."
        />
        <DescriptionPanel
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </>
  );
}

export default AboutPage;
