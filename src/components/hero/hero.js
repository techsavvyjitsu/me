import 'bulma-ext-carousel-css';

import React, { Component } from 'react';
import image_1 from '../../assets/imgs/slider_img_1.jpeg';
import image_2 from '../../assets/imgs/slider_img_2.jpeg';
import image_3 from '../../assets/imgs/slider_img_3.jpeg';
import image_4 from '../../assets/imgs/slider_img_4.jpeg';

import '../bulma-carousel/bulma-carousel.min';

class Hero extends Component {
  render() {
    return (
      <div className="hero-component container">
        <section className="hero is-large has-carousel">
          <div className="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true">
            <div className='carousel-container'>
              <div className='carousel-item has-background is-active'>
                <img className="is-background" src={image_1} alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src={image_2} alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src={image_3} alt="" />
              </div>
              <div className='carousel-item has-background'>
                <img className="is-background" src={image_4} alt="" />
              </div>
            </div>
          </div>
          <div className="hero-body has-text-centered"></div>
        </section>
      </div>
    );
  }
}

export default Hero;
