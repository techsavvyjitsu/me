import './hero.less';

import React, { Component } from 'react';
import ParticlesJS from '../particlesjs';
import Typed from 'typed.js';

class Hero extends Component {
  typing() {
    new Typed('.typed-wrapper', {
      strings: [
        '> Wake up. Ashwin ...',
        '> Here is someone who loves working on ...',
        '> JavaScript, Python and Go ... etc. is visiting your website',
        '> Connecting ...',
        '> Hello there, welcome to my website ... this is Ashwin',
        '> Follow the website links to know more about me and my work ...',
        '> Click, Click, Click ...'
      ],
      typeSpeed: 50,
      loop: true
    });
  }

  componentDidMount() {
    window.addEventListener('load', this.typing);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.typing);
  }

  render() {
    return (
      <div className="hero-component">
        <ParticlesJS 
          bodyClasses="particle-body"
          componentClasses="particle-component-night">
          
          <div className="hero-body">
            <div className="container hero-body-content">
              <p className="subtitle has-text-primary typed-wrapper"></p>
            </div>
          </div>

        </ParticlesJS>
      </div>
    );
  }
}

export default Hero;
