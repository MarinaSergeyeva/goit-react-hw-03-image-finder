import axios from "axios";

export default {
  getPictures(searchQuery, page) {
    return axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=17555689-e3a38662af6719ca5a1675e73&image_type=photo&orientation=horizontal&per_page=12`
      )

      .then(({ data }) => {
        return data.hits;
      });
  }
};
