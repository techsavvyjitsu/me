import React, { Component } from 'react';
import CardTitle from './card-title';

class CardContent extends Component {
  renderCardTitle(title = "", subTitle = "") {
    return (
      <CardTitle 
        title={title}
        subTitle={subTitle}
      />
    )
  }

  render() {
    const {
      title,
      subTitle
    } = this.props;

    let cardTitle;
    if (title || subTitle) {
      cardTitle = this.renderCardTitle(title, subTitle);
    }

    return (
      <div className="card-content-component card-body">
        {cardTitle}
        <div className="content">{this.props.children}</div>
      </div>
    );
  }
}

export default CardContent;
