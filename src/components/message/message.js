import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div className="message-component alert alert-info">
        {this.props.children}
      </div>
    );
  }
}

export default Message;