import React, { Component } from "react";
import SearchBar from "./Components/SearchBar/SearchBar";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import API from "./services/api";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Loading from "./Components/Loader/Loading";

export default class App extends Component {
  state = {
    articles: [],
    searchQuery: "",
    page: 1,
    error: null,
    isShown: false,
    imgSrc: "",
    imgAlt: "",
    isLoading: false
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      API.getPictures(searchQuery, page)
        .then(data => {
          this.setState(prevState => ({
            page: prevState.page + 1,
            articles: data,
            isLoading: true
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({
            isLoading: false
          });
        });
    }

    if (prevState.articles.length !== this.state.articles.length) {
      // console.log("HEIGHT", document.documentElement.scrollHeight);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      articles: []
    });
  };

  loadMore = () => {
    const { searchQuery, page } = this.state;

    this.setState({
      isLoading: true
    });

    API.getPictures(searchQuery, page)
      .then(articles => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          articles: [...prevState.articles, ...articles]
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  openModal = e => {
    console.log("e.target", e.target);
    const target = e.target;

    if (target.nodeName === "IMG") {
      this.setState(
        prevState => ({
          isShown: !prevState.isShown
        }),
        this.setState({
          imgSrc: target.src,
          imgAlt: target.alt
        })
      );
    } else return;
  };

  closeModal = () => {
    this.setState({
      isShown: false
    });
  };

  render() {
    const { articles, isShown, imgSrc, imgAlt, isLoading } = this.state;
    console.log(isLoading);
    return (
      <>
        <SearchBar handleSearchFormSubmit={this.handleSearchFormSubmit} />
        {isLoading && <Loading />}
        <ImageGallery openModal={this.openModal} articles={articles} />
        {articles.length > 0 && <Button loadMore={this.loadMore} />}

        {isShown && <Modal imgSrc={imgSrc} imgAlt={imgAlt} closeModal={this.closeModal} />}
      </>
    );
  }
}
