import React from "react";
// import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery({ articles, openModal }) {
  return (
    <>
      <ul className={style.ImageGallery} onClick={openModal}>
        {articles.map((article) => (
          <ImageGalleryItem key={article.id} article={article} />
        ))}
      </ul>
    </>
  );
}
