import React, { Component } from 'react';

class CardTitle extends Component {
  render() {
    const {
      title,
      subTitle
    } = this.props;

    return (  
      <div className="card-title-component has-text-centered">
        <h5 class="card-title">{title}</h5>
      </div>
    );
  }
}

export default CardTitle;
