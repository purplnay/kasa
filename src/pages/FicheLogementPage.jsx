import logements from "../assets/logements.json";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

export default function FicheLogementPage() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Diapo a des fleches et un numero

  if (!logement) {
    return <NotFoundPage />;
  }

  return <h1>Fiche logement</h1>;
}
