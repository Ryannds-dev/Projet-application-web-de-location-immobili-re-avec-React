import "./Card.scss";

export default function Card({ title, image }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <p className="card__title">{title}</p>
    </div>
  );
}
