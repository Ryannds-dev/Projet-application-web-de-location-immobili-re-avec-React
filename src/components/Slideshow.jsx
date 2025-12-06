import { useState } from "react";
import "./Slideshow.scss";
import slideshowArrow from "../assets/slideshow_arrow.png";

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showControls = images.length > 1;

  return (
    <div className="slideshow">
      <img src={images[index]} alt="logement" className="slideshow__image" />

      {showControls && (
        // parce qu'il faut que showControls soit vrai pour afficher le reste
        <>
          <button
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={prevSlide}
          >
            <img
              src={slideshowArrow}
              alt="flèche de défilement des images précédentes de l'appartement"
            />
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={nextSlide}
          >
            <img
              src={slideshowArrow}
              alt="flèche de défilement des images suivantes de l'appartement"
            />
          </button>

          <div className="slideshow__counter">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
