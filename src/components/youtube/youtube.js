import React, { Component } from 'react';

class YouTube extends Component {
  render() {
    const {
      width,
      height,
      embedId
    } = this.props;

    const src = `https://www.youtube.com/embed/${embedId}?enablejsapi=1`;

    return (
      <iframe className="youtube-component" id="player" type="text/html"
        width={width}
        height={height}
        src={src}
        frameborder="0" />
    );
  }
}

export default YouTube;
