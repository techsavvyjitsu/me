import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class ExtLink extends Component {
  render() {
    const {
      classes,
      linkTo
    } = this.props;

    let extLinkStyle = {
      'ext-link-component': true
    };
    extLinkStyle[`${classes}`] = true;
    extLinkStyle = classnames(extLinkStyle);

    return (  
      <a className={extLinkStyle} href={linkTo} target="_blank" rel="noopener noreferrer">
        {this.props.children}
      </a>
    );
  }
}

ExtLink.defaultProps = {
  linkTo: '#'
};

ExtLink.propTypes = {
  linkTo: PropTypes.string,
  classes: PropTypes.string
};

export default ExtLink;
