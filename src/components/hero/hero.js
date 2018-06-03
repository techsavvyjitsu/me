import './hero.less';

import React, { Component } from 'react';
import ParticlesJS from '../particlesjs';
import Typed from 'typed.js';

class Hero extends Component {
  typing() {
    new Typed('.typed-wrapper', {
      strings: [
        'Wake up. Ashwin ...',
        'Here is someone who loves working on JavaScript, Python and Go ... etc. is visiting your website',
        'Hello there, welcome to my website ... this is Ashwin',
        'Follow the website links to know more about me and my work ...',
        'Click, Click, Click ...'
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

        

        {/*<section className="hero is-large has-carousel">
          <div className="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
            <div className='carousel-container'>
              <div className='carousel-item has-background is-active'>
                <img className="is-background" src="https://res.cloudinary.com/hegdeashwin/image/upload/s--AXN_jR2P--/v1523201462/slider_img_2.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://res.cloudinary.com/hegdeashwin/image/upload/s--oQuUHqkc--/v1523201463/slider_img_3.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://res.cloudinary.com/hegdeashwin/image/upload/s--9Ih67kon--/v1523201462/slider_img_1.jpg" alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src="https://res.cloudinary.com/hegdeashwin/image/upload/s--GO5OU2rv--/v1523201462/slider_img_4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="hero-body has-text-centered">
            <p className="has-text-white author-copyright">Photographed by Ashwin Hegde</p>
          </div>
        </section> */}
      </div>
    );
  }
}

export default Hero;
