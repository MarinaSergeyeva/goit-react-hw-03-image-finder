import React, { Component } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import axios from "axios";

export default class App extends Component {
  state = {
    articles: [],
    searchQuery: "",
    page: 1,
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    const { searchQuery, page } = this.state;

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17555689-e3a38662af6719ca5a1675e73&image_type=photo&orientation=horizontal&per_page=12
    `
      )
      .then(data => {
        this.setState({
          articles: data.data.hits,
          loading: false
        });
      });
  }

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: []
    });
  };

  render() {
    const { articles } = this.state;
    console.log("APParticles", articles);
    return (
      <>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <SearchBar handleSearchFormSubmit={this.handleSearchFormSubmit} />
            <ImageGallery articles={articles} />
          </div>
        )}
      </>
    );
  }
}
