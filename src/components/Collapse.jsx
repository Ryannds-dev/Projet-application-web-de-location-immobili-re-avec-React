import { useState } from "react";
import collapseArrow from "../assets/collapse_arrow.png";
import "./Collapse.scss";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`collapse ${isOpen ? "collapse--open" : ""}`}>
      <button className="collapse__header" onClick={handleToggle}>
        <span className="collapse__title">{title}</span>
        <img
          src={collapseArrow}
          alt="flèche de dépliement du contenu du bouton"
          className={`collapse__icon ${isOpen ? "open" : ""}`}
        />
      </button>

      <div className="collapse__content-wrapper">
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}
