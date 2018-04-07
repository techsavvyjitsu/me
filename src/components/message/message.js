import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <article className="message-component message is-info">
        <div className="message-body">
          {this.props.children}
        </div>
      </article>
    );
  }
}

export default Message;