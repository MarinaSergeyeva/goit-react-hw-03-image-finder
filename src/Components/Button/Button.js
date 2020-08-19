import React from "react";
import style from "./Button.module.css";

export default function Button({ loadMore }) {
  return (
    <>
      <button className={style.Button} onClick={loadMore} type="button">
        Load more
      </button>
    </>
  );
}
