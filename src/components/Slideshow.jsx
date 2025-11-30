import { useState } from "react";
import "./Slideshow.scss";

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
            ‹
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={nextSlide}
          >
            ›
          </button>

          <div className="slideshow__counter">
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
