import './cards-header.less';

import React from 'react';

class CardsHeader extends React.Component {
  render() {
    return (
      <div className="card-header card-header-component">
        {this.props.children}
      </div>
    );
  }
}

export default CardsHeader;
