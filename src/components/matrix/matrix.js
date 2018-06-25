import './matrix.less';

import React, { Component } from 'react';

class Matrix extends Component {
  constructor(props) {
    super(props);

    this.loadMatrix = this.loadMatrix.bind(this);
    this.drawMatrix = this.drawMatrix.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.loadMatrix);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.loadMatrix);
  }

  drawMatrix(canvas, context, drops, content, fontSize = 10) {
    // drawing the characters
    // Black BG for the canvas translucent BG to show trail
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.fillStyle = '#0F0'; //green text
    context.font = fontSize + 'px arial';

    // looping over drops
    for(let i = 0; i < drops.length; i++) {
      // a random content character to print
      let text = content[Math.floor(Math.random()*content.length)];
      // x = i*fontSize, y = value of drops[i]*fontSize
      context.fillText(text, i*fontSize, drops[i]*fontSize);
      
      // sending the drop back to the top randomly after it has crossed the screen
      // adding a randomness to the reset to make the drops scattered on the Y axis
      if(drops[i]*fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      // incrementing Y coordinate
      drops[i]++;
    }
  }

  loadMatrix() {
    const canvas = document.querySelector('#matrix');
    const context = canvas.getContext("2d");
    let { content, fontSize } = this.props;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Converting the string into an array of single characters
    content = content.split("");

    let columns = canvas.width/fontSize; // Number of columns for the rain
    // An array of drops - one per column
    let drops = [];

    for(var x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    setInterval(() => {
      this.drawMatrix(canvas, context, drops, content, fontSize)
    }, 33);
  }

  render() {
    return (
      <div className="matrix-component">
        <canvas id="matrix"></canvas>
        {this.props.children}
      </div>
    );
  }
}

export default Matrix;
