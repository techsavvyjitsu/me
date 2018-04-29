import React, { Component } from 'react';

class CardTitle extends Component {
  render() {
    const {
      title,
      subTitle
    } = this.props;

    return (  
      <div className="card-title-component has-text-centered">
        <p className="title is-4">{title}</p>
        <p className="subtitle is-6 has-text-grey">{subTitle}</p>
      </div>
    );
  }
}

export default CardTitle;
