import './ImageGalleryItem.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  return (
    <li className="image-gallery-item">
      <img
        className="image-gallery-item-image"
        src={webformatURL}
        onClick={() => onClick(largeImageURL)}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
