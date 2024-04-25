import ImageBanner from "../components/ImageBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <ImageBanner />
      <div className="about-page__header">
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  );
}

export default AboutPage;
