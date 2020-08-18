import React, { Component } from "react";
import style from "./SearchBar.module.css";

export default class SearchBar extends Component {
  render() {
    return (
      <header className={style.Searchbar}>
        <form className="SearchForm">
          <button type="submit" className={style.SearchForm_button}>
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input className="SearchForm-input" type="text" autoComplete="off" autoFocus placeholder="Search images and photos" />
        </form>
      </header>
    );
  }
}
