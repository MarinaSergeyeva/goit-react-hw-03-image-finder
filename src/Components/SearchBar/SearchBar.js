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

    this.setState({
      loading: true
    });
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
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={style.SearchFormInput}
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
