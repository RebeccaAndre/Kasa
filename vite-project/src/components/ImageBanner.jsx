// function ImageBanner() {
//   return (
//     <div className="appartement-page__image-container">
//       <img
//         src="/Background.png"
//         alt="Appartement"
//         className="appartement-page__image"
//       />
//     </div>
//   );
// }

// export default ImageBanner;

import "./ImageBanner.css";
import PropTypes from "prop-types";

function ImageBanner({ image }) {
  return (
    <div className="appartement-page__image-container">
      <img src={image} alt="Appartement" className="appartement-page__image" />
    </div>
  );
}

ImageBanner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageBanner;
