import "./AppartementEquipement.css";

function AppartementEquipement() {
  return (
    <div className="appartement-page__equipement">
      <h4>
        <span>Équipements</span>
        <i className="fa-solid fa-chevron-down chevron"></i>
      </h4>
      <p className="equipement">
        Climatisation, Wi-Fi, Cuisine, Espace de travail, Fer à repasser,
        Sèche-cheveux, Cintres.
      </p>
    </div>
  );
}

export default AppartementEquipement;
