// Package
import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const {
      name,
      size,
      title,
      type
    } = this.props;

    let iconStyle = {};
    iconStyle[`${type}`] = true;
    iconStyle[`fa-${size}`] = true;

    if (name) {
      iconStyle[`fa-${name}`] = true;
    }

    iconStyle = classnames(iconStyle);

    return (
      <i className={iconStyle} title={title} aria-hidden="true"></i>
    );
  }
}

Icon.defaultProps = {
  size: 'lg',
  type: 'fab'
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x']),
  title: PropTypes.string,
  type: PropTypes.oneOf(['fab', 'fas', 'far'])
};

export default Icon;