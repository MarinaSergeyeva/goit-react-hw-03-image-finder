import React, { Component } from "react";
import style from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCLick);
    document.addEventListener("click", this.handleCLick);
  }

  componentWillMount() {
    window.removeEventListener("keydown", this.handleCLick);
    document.removeEventListener("click", this.handleCLick);
  }

  handleCLick = (e) => {
    const target = e.target;

    if (target.nodeName !== "IMG" || e.code === "ESC") {
      this.props.closeModal();
    }
  };

  render() {
    const { imgSrc, imgAlt } = this.props;

    return (
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src={imgSrc} alt={imgAlt} />
        </div>
      </div>
    );
  }
}
