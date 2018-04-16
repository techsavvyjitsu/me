// Package
import React, { Component } from 'react';

// Components
import Header from './components/header';
import Footer from './components/footer';
import ScrollTop from './components/scroll-top';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <section className="main-section container">
          {this.props.children}
        </section>
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}

export default App;
