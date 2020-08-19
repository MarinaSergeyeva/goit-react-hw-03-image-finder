import React, { Component } from "react";
import Loader from "react-loader-spinner";
import style from "./Loading.module.css";

export default class Loading extends Component {
  //other logic
  render() {
    return (
      <div className={style.div}>
        <Loader
          type="Oval"
          color="#00BFFF"
          height={80}
          width={80}
          className={style.Loading}
        />
      </div>
    );
  }
}
