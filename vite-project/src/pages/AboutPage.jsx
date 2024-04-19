import ImageBanner from "../components/ImageBanner";
import DescriptionPanel from "../components/DescriptionPanel";
import "./AboutPage.css";
import Footer from "../miseEnPage/Footer";

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
      <Footer />
    </>
  );
}

export default AboutPage;
