import './header.less';
import React, { Component } from 'react';
import Icon from '../../components/icon';
import { Link } from 'react-router';

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
      <nav className="header-component navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://res.cloudinary.com/hegdeashwin/image/upload/v1533905081/self.jpg" alt="Hello World! I am Ashwin, Welcome to my website" /> <span className="navbar-brand mb-0 h1">Hello World!</span>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
              <li className="nav-item">
                <Link className="nav-link" to="/aboutme"><Icon name="user" type="fas" size="sm" title="About" />&nbsp;About</Link>
              </li>
              {/*<li className="nav-item">
                <Link className="nav-link" to="/work/projects"><Icon name="briefcase" type="fas" size="sm" title="Works" />&nbsp;Work</Link>
              </li>*/}
              <li className="nav-item">
                <Link className="nav-link" to="/hobby/photography"><Icon name="binoculars" type="fas" size="sm" title="Hobbies" />&nbsp;Hobbies</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
