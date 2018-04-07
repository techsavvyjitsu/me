import React, { Component } from 'react';

class TimelineHeader extends Component {
  render() {
    return (
      <header className="timeline-header-component timeline-header">
        {this.props.children}
      </header>
    );
  }
}

export default TimelineHeader;