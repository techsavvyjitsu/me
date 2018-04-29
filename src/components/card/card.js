import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (  
      <div className="card card-component">
        {this.props.children}
      </div>
    );
  }
}

export default Card;
