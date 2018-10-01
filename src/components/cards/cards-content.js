import React from 'react';
import PropTypes from 'prop-types';

class CardsContent extends React.Component {
  render() {
    const {
      title,
      subTitle
    } = this.props;

    return (
      <div className="card-body card-content-component">
        {
          title &&
          <h5 className="card-title">{title}</h5>
        }
        {
          subTitle &&
          <p className="card-text text-secondary">{subTitle}</p>
        }
        {this.props.children}
      </div>
    );
  }
}

CardsContent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default CardsContent;
