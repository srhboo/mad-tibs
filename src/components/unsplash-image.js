import { unsplash } from "../index";
import React from "react";

export class UnsplashImage extends React.Component {
  state = {
    imageData: {}
  };
  componentDidMount() {
    const { searchTerm } = this.props;
    unsplash.search
      .photos(searchTerm, 1, 2)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  render() {
    const { imageData } = this.state;
    return imageData ? "image" : "noimage";
  }
}
