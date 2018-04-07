// Package
import React, { Component } from 'react';

// Components
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <section className="main-section">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
