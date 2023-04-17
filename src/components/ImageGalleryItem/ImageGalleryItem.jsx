import './ImageGalleryItem.css';

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
