// Packages
import React, { Component } from 'react';

// Components
import Hero from '../../components/hero';
import Card from '../../components/card';

class Home extends Component {
  render() {
    return (  
      <section className="home-component">
        <Hero />
      </section>
    );
  }
}

export default Home;
