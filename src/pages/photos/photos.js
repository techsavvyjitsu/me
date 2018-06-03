import './photos.less';

import React, { Component } from 'react';

class Photos extends Component {
  render() {
    return (
      <section className="photos-component parallax">
      
        <div class="picture picture-1">
          <p class="title is-size-5">Photographed by Ashwin Hegde</p>
        </div>
        <section class="section section-dark">
          <h2 className="is-size-6">Common Kingfisher</h2>
        </section>
      
        <div class="picture picture-2">
          <p class="title is-size-5">Photographed by Ashwin Hegde</p>
        </div>
        <section class="section section-dark">
          <h2 className="is-size-6">Rhesus Monkey</h2>
        </section>

        <div class="picture picture-3">
          <p class="title is-size-5">Photographed by Ashwin Hegde</p>
        </div>
        <section class="section section-dark">
          <h2 className="is-size-6">Porcupine</h2>
        </section>

      </section>
    );
  }
}

export default Photos;
