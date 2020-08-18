import React, { Component } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import axios from "axios";

export default class App extends Component {
  state = {
    articles: [],
    searchQuery: "",
    page: 1,
  };

  componentDidMount() {
    const { searchQuery, page } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17555689-e3a38662af6719ca5a1675e73&image_type=photo&orientation=horizontal&per_page=12
    `
      )
      .then((data) => console.log(data.data.hits));
  }

  render() {
    return (
      <>
        <SearchBar />
        <ImageGallery />
      </>
    );
  }
}
