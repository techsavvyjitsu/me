import React, { Component } from 'react';

class TimelineContent extends Component {
  render() {
    return (
      <div className="timeline-content-component timeline-item is-primary">
        <div className="timeline-marker is-primary"></div>
        <div className="timeline-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TimelineContent;