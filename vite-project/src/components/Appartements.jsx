import { useState, useEffect } from "react";
import FlatCard from "./FlatCard";
import "./Appartements.css";

function Appartements() {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setAppartements(data));
  }, []);

  return (
    <div className="gallery">
      {appartements.map((appartement) => (
        <FlatCard key={appartement.identifiant} appartement={appartement} />
      ))}
    </div>
  );
}

export default Appartements;
