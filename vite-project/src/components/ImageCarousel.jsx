import { useState } from "react";
import "./ImageCarousel.css";
import PropTypes from "prop-types";

function ImageCarousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel-container">
      {pictures.length > 1 && (
        <>
          <img
            src="/arrowLeft.png"
            alt="Previous"
            className="arrow left-arrow"
            onClick={goToPrevious}
          />
          <img
            src="/arrowRight.png"
            alt="Next"
            className="arrow right-arrow"
            onClick={goToNext}
          />
        </>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      {pictures.length > 1 && (
        <div className="index-indicator">{`${currentIndex + 1} / ${
          pictures.length
        }`}</div>
      )}
    </div>
  );
}

ImageCarousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
