import React, { Component } from 'react';

class Card extends Component {
  render() {
    const {
      img,
      title,
      subTitle,
      hasThumbnail,
      thumbnailImg
    } = this.props;

    return (  
      <div className="card card-component">
        <div className="card-image">
          <figure className="image">
            <img src={img} alt={img} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            {
              hasThumbnail &&
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={thumbnailImg} alt={thumbnailImg} />
                </figure>
              </div>
            }
            
            <div>
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{subTitle}</p>
            </div>
          </div>

          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Card;
