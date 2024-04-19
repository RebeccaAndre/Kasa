import AppartementDescription from "../components/AppartementDescription";
import AppartementEquipement from "../components/AppartementEquipement";
import "./AppartementPage.css";
import AppartementPageBanner from "../components/AppartementPageBanner";
// import AppartementPageHeader from "../components/AppartementPageHeader";

function AppartementPage() {
  return (
    <div className="appartement-page">
      <AppartementPageBanner />
      <div className="appartement__header">
        <div>
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île-de-France</h2>
          <div className="appartement__tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="appartement-page__owner">
          <div className="appartement-page__owner-info">
            <h3>Alexandre Dumas</h3>
            <div className="appartement-page__owner-badge"></div>
          </div>
          <div className="appartement-page__owner-stars">
            <i className="fa-solid fa-star active"></i>
            <i className="fa-solid fa-star active"></i>
            <i className="fa-solid fa-star active"></i>
            <i className="fa-solid fa-star inactive"></i>
            <i className="fa-solid fa-star inactive"></i>
          </div>
        </div>
      </div>
      {/* <AppartementPageHeader /> */}
      <div className="appartement-page__details">
        <AppartementDescription />
        <AppartementEquipement />
      </div>
    </div>
  );
}

export default AppartementPage;
