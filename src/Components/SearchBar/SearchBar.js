import React, { Component } from "react";
import style from "./SearchBar.module.css";

export default class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(this.props);
    this.props.handleSearchFormSubmit(this.state.inputValue);
    this.setState({
      inputValue: ""
    });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className={style.Searchbar}>
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm_button}>
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
