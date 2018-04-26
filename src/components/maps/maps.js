import './maps.less';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Maps extends Component {
  render() {
    const {
      src,
      width,
      height,
      title,
      subTitle
    } = this.props;

    const url = `https://www.google.com/maps/embed?pb=${src}?enablejsapi=1`;
    
    return (
      <div className="maps maps-component">
        <div className="maps-image">
          <figure className="image">
            <iframe width={width} height={height} src={url} frameborder="0" style={{border: 0}} />
          </figure>
        </div>
        <div className="maps-content">
          <div className="maps-title has-text-centered">
            <p className="title is-4">{title}</p>
            <p className="subtitle is-6 has-text-grey">{subTitle}</p>
          </div>

          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Maps.defaultProps = {
  width: '350',
  height: '180'
};

Maps.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default Maps;
