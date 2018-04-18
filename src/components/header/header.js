import './header.less';
import React, { Component } from 'react';
import Icon from '../../components/icon';
import { Link } from 'react-router-dom';
import selfPic from '../../assets/imgs/self.jpeg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
  }

  toggleBurgerMenu() {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  }

  componentWillMount() {
    document.addEventListener('DOMContentLoaded', this.toggleBurgerMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('DOMContentLoaded', this.toggleBurgerMenu);
  }

  render() {
    return (  
      <nav className="navbar is-light header-component">
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to="">
              <img src={selfPic} alt="Hello World! I am Ashwin, Welcome to my website" /> <strong>Hello World!</strong>
            </Link>
            <div className="navbar-burger burger" data-target="navMenuColordark">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navMenuColordark" className="navbar-menu">
            <div className="navbar-end">
              <Link className="navbar-item" to="aboutme"><Icon name="user" type="fas" size="sm" title="Animals" />&nbsp;About</Link>
              <Link className="navbar-item" to="hoddy/photography"><Icon name="camera" type="fas" size="sm" title="Animals" />&nbsp;Hobbies</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
