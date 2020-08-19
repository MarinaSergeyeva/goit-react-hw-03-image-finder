import React from "react";
import style from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ article }) {
  const { id, webformatURL, tags, largeImageURL } = article;
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
}
