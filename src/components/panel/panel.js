import './panel.less';
import React, { Component } from 'react';

class Panel extends Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <nav className="panel panel-component">
        <p className="panel-heading">{title}</p>
        <div className="panel-block">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export default Panel;
