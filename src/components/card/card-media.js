import './card-media.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

class CardMedia extends Component {
  constructor(props) {
    super(props);
    
    this.renderImage = this.renderImage.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.renderVideo = this.renderVideo.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
  }
  
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
          <iframe title={source} width={width} height={height} src={url} frameBorder="0" style={{border: 0}} />
        </figure>
      </div>
    )
  }

  renderVideo(source, width, height) {
    return (
      <div className="card-video">
        <figure className="image">
          <iframe title={source} width={width} height={height} src={source} frameBorder="0" style={{border: 0}} />
        </figure>
      </div>
    )
  }

  renderIcon(source, classes, iconType, title) {
    return (
      <div className="card-icon">
        <figure className="image">
          <Icon name={source} size="5x" classes={classes} type={iconType} title={title} />
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
      title,
      iconType,
      classes
    } = this.props;

    let mediaContent = this.renderImage(source, alt);

    if (type === 'map') {
      mediaContent = this.renderMap(source, width, height);
    } else if (type === 'video') {
      mediaContent = this.renderVideo(source, width, height);
    } else if (type === 'icon') {
      mediaContent = this.renderIcon(source, classes, iconType, title);
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
