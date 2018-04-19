import './youtube.less';
import React, { Component } from 'react';

class YouTube extends Component {
  render() {
    const {
      embedId
    } = this.props;

    const src = `https://www.youtube.com/embed/${embedId}?enablejsapi=1`;

    return (
      <div className="youtube-component">
        <iframe id="player" type="text/html"
          width="100%"
          height="100%"
          title={embedId}
          src={src}
          frameBorder="0" />
      </div>
    );
  }
}

export default YouTube;
