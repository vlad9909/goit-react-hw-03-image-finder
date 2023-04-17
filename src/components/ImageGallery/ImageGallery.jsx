import React from 'react';
import './ImageGallery.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  console.log(images.id);
  return (
    <ul className="image-gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        console.log(id);
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            // {...otherProps}
          />
        );
      })}
    </ul>
  );
};
