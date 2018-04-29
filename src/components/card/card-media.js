import './card-media.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardMedia extends Component {
  renderImage(source, alt) {
    return (
      <div className="card-image">
        <figure className="image">
          <img src={source} alt={alt} />
        </figure>
      </div>
    )
  }
  
  renderMap(source, width, height) {
    const url = `https://www.google.com/maps/embed?pb=${source}?enablejsapi=1`;

    return (
      <div className="card-map">
        <figure className="image">
          <iframe title={source} width={width} height={height} src={url} frameborder="0" style={{border: 0}} />
        </figure>
      </div>
    )
  }

  renderVideo(source, width, height) {
    return (
      <div className="card-video">
        <figure className="image">
          <iframe title={source} width={width} height={height} src={source} frameborder="0" style={{border: 0}} />
        </figure>
      </div>
    )
  }
  
  render() {
    const {
      type,
      source,
      alt,
      width,
      height,
    } = this.props;

    let mediaContent = this.renderImage(source, alt);

    if (type === 'map') {
      mediaContent = this.renderMap(source, width, height);
    } else if (type === 'video') {
      mediaContent = this.renderVideo(source, width, height);
    }

    return (  
      <div className="card-media-component">
        {mediaContent}
      </div>
    );
  }
}

CardMedia.defaultProps = {
  width: '350',
  height: '180'
};

CardMedia.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string
};

export default CardMedia;
