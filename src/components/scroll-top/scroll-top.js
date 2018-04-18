import './scroll-top.less';
import React, { Component } from 'react';
import Icon from '../icon';

class ScrollTop extends Component {
  constructor(props) {
    super(props);

    this.scrollTop = this.scrollTop.bind(this);
    this.triggerScrollTop = this.triggerScrollTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.triggerScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.triggerScrollTop);
  }

  triggerScrollTop() {
    const scrollTopComponent = this.refs.scroll;
    const scrollLimitStart = 20;
    
    if (document.body.scrollTop > scrollLimitStart || document.documentElement.scrollTop > scrollLimitStart) {
      scrollTopComponent.style.display = 'block';
    } else {
      scrollTopComponent.style.display = 'none';
    }
  }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return ( 
      <button ref="scroll" style={{display:'none'}} className="scroll-top-component button is-primary has-text-black-bis" onClick={this.scrollTop} title="Scroll to top of this page">
        <Icon name="angle-up" type="fas" classes="" size="lg" /> Scroll Top
      </button>
    );
  }
}

export default ScrollTop;
