import React from 'react';

class Cards extends React.Component {
  render() {
    return (  
      <div className="card card-component mt-3 mb-3">
        {this.props.children}
      </div>
    );
  }
}

export default Cards;
