import { unsplash } from "../index";
import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border: 10px solid black;
`;

export class UnsplashImage extends React.Component {
  state = {
    imageUrl: {}
  };
  componentDidMount() {
    const { searchTerm } = this.props;
    unsplash.search
      .photos(searchTerm, 1, 2)
      .then(res => res.json())
      .then(data => {
        const imageUrl =
          data && data.results && data.results[0] && data.results[0].urls.small;
        this.setState({ imageUrl });
      });
  }
  render() {
    const { imageUrl } = this.state;
    const { searchTerm } = this.props;
    return imageUrl ? (
      <Image src={imageUrl} alt={searchTerm} />
    ) : (
      "there are no images here, only words"
    );
  }
}
