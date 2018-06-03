import './particlesjs.less';

import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesJS extends Component {
  getThemeConfigs(theme) {
    switch (theme) {
      case 'day':
      return require('./pjs-theme-config-day');

      case 'night':
      default:
      return require('./pjs-theme-config-night');
    }
  }

  render() {
    const {
      theme,
      componentClasses,
      bodyClasses
    } = this.props;

    return (  
      <div className="particles-component">
        <Particles 
          params = {this.getThemeConfigs(theme)}
          className = {componentClasses} />
        <div className={bodyClasses}>{this.props.children}</div>
      </div>
    );
  }
}

export default ParticlesJS;
