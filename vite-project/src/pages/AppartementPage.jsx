import AppartementEquipement from "../components/AppartementEquipement";
import "./AppartementPage.css";
import ImageBanner from "../components/ImageBanner";
import AppartementPageHeader from "../components/AppartementPageHeader";
import DescriptionPanel from "../components/DescriptionPanel";

function AppartementPage() {
  return (
    <div className="appartement-page">
      <ImageBanner />
      <AppartementPageHeader />
      <div className="appartement-page__details">
        <DescriptionPanel />
        <AppartementEquipement />
      </div>
    </div>
  );
}

export default AppartementPage;
