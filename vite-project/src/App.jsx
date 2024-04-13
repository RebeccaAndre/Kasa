import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Appartements from "./components/Appartements";
import Main from "./components/Main.jsx";
import "./components/Main.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Appartements />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
