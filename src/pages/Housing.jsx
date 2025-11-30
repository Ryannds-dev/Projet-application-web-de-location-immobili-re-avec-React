import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";

export default function Housing() {
  const { id } = useParams();

  // le logement qui correspond à l'id
  const logement = logements.find((item) => item.id === id);

  return (
    <>
      <Slideshow images={logement.pictures} />
    </>
  );
}
