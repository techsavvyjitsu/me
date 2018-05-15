import 'bulma-ext-carousel-css';
import './hero.less';

import React, { Component } from 'react';
import '../bulma-carousel/bulma-carousel.min';

class Hero extends Component {
  render() {
    return (
      <div className="hero-component">
        <section className="hero is-large has-carousel">
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
        </section>
      </div>
    );
  }
}

export default Hero;
