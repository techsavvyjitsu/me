import './hero.less';

import React, { Component } from 'react';
import Typed from 'typed.js';
import Matrix from '../matrix';

class Hero extends Component {
  typing() {
    new Typed('.typed-wrapper', {
      strings: [
        '> Wake up. Ashwin ...',
        '> Someone is trying to visiting your website ...',
        '> Connecting ...',
        '> Hello there, welcome to my website ...',
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
        <Matrix content="Hello World! My name is Ashwin" fontSize="10">
          
          <div className="hero-body">
            <div className="container hero-body-content">
              <p className="typed-wrapper"></p>
            </div>
          </div>

        </Matrix>
      </div>
    );
  }
}

export default Hero;
