import React from "react";
// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ articles }) {
  return (
    <ul className="ImageGallery">
      {articles.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li key={id}>
          <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
        </li>
      ))}
      {/* {<ImageGalleryItem /> */}
    </ul>
  );
}
