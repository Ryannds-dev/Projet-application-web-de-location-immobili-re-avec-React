import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__code">404</h1>

      <p className="notfound__message">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link to="/" className="notfound__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
