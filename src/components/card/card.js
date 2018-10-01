import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (  
      <div className="card card-component">
        {this.props.children}
      </div>
    );
  }
}

export default Cards;
