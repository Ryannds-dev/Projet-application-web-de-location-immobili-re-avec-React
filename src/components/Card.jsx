import "./Card.scss";
import { Link } from "react-router-dom";

export default function Card({ id, title, image }) {
  return (
    <Link
      to={`/housing/${id}`}
      className="card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <p className="card__title">{title}</p>
    </Link>
  );
}
