import './social.less';
import Socials from './socialData';
import React, { Component } from 'react';
import classnames from 'classnames';

import Icon from '../icon';

class Social extends Component {
  render() {
    const {
      showBrandName,
      isButtonStyle
    } = this.props;

    return (
      <p className="field is-grouped social-component">
        {
          Socials.reference.map((social, index) => {
            const {
              brand,
              linkTo,
              title
            } = social;

            let linkStyle = {
              'button': (isButtonStyle) ? true : false
            };
            linkStyle[brand] = true;
            linkStyle = classnames(linkStyle);

            let paraIconStyle = {
              'control': true,
              'icon-space':  (isButtonStyle) ? false : true
            };
            paraIconStyle = classnames(paraIconStyle);

            return (
              <span className={paraIconStyle} key={index}>
                <a className={linkStyle} rel="noopener noreferrer" 
                  data-social-network={brand} data-social-action={brand} 
                  data-social-target={linkTo} 
                  target="_blank" href={linkTo} title={title}>
                  <Icon name={brand} /> { showBrandName && <span className="is-hidden-mobile">{title}</span> }
                </a>
              </span>
            )
          })
        }
      </p>
    );
  }
}

export default Social;