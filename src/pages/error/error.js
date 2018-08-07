import './error.less';
import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (  
      <section className="error-component">
        <img src="http://res.cloudinary.com/hegdeashwin/image/upload/s---7pBjw6f--/c_scale,w_1920/v1533496824/animal-avian-bird-1149816.jpg" alt="404" />
        <div className="content"> 
          <h2 className="is-size-4">We couldn’t find what you were looking for.</h2>
          <p className="is-size-6">Unfortunately the page you were looking for could not be found. It may be temporally unavailable, moved or no longer exist.</p>
        </div>
      </section>
    );
  }
}

export default Error;
