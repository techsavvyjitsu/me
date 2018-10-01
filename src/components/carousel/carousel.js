import './carousel.less';

import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <Slider {...settings} className="carousel-component">
        <div>
          <div className="slider-content">
            <h1 className="slider-title is-size-4">
              Title
            </h1>
          </div>
          <div className="slider-img">
            <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409406/arm-break-business-257897.jpg" alt="Banner" />
          </div>
        </div>
        <div>
          <div className="slider-content">
            <h1 className="title">
              Title
            </h1>
            <h2 className="subtitle">
              Subtitle
            </h2>
          </div>
          <div className="slider-img">
            <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409409/business-computer-contemporary-669996.jpg" alt="Banner" />
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409411/code-coding-computer-574071_1.jpg" alt="Banner" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409409/camera-dslr-landscape-212372.jpg" alt="Banner" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409408/asphalt-environment-grass-239520.jpg" alt="Banner" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409407/apple-business-computer-39284.jpg" alt="Banner" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533409408/blur-business-card-185933.jpg" alt="Banner" />
        </div>
      </Slider>
    );
  }
}

export default Carousel;