import Banner from "../miseEnPage/Banner.jsx";
import Appartements from "../components/Appartements.jsx";
import Main from "../miseEnPage/Main.jsx";
import "../miseEnPage/Main.css";

function HomePage() {
  return (
    <Main>
      <Banner />
      <Appartements />
    </Main>
  );
}

export default HomePage;
