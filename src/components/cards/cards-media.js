import React from 'react';
import PropTypes from 'prop-types';

class CardsMedia extends React.Component {
  render() {
    const {
      source,
      alt,
    } = this.props;

    return (
      <img className="card-img-top" src={source} alt={alt} />
    );
  }
}

CardsMedia.propTypes = {
  source: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string
};

export default CardsMedia;
