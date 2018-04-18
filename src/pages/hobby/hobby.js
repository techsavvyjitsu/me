import './hobby.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Icon from '../../components/icon';
// import Photography from '../../pages/photography';
// import Donations from '../../pages/donations';

class Hobby extends Component {
  
  render() {
    // const matchedRoute = this.props.match && this.props.match.params.hobby.toLowerCase();
    // const photographyState = (matchedRoute === 'photography') ? 'is-active' : '';
    // let donateState;
    // let ChildComponent = (
    //   <Photography />
    // );
    // if (matchedRoute === 'donations') {
    //   donateState = 'is-active';
    //   ChildComponent = (
    //     <Donations />
    //   )
    // } else {
    //   <Redirect to="/" />
    // }

    return (
      <section className="hobby-component">
        <div className="columns">
          <div className="column is-3">
            <aside className="menu">
              <ul className="menu-list">
                <li><Link to="/hobby/photography" className=""><Icon name="images" type="far" size="sm" title="Hobby" /> Photography</Link></li>
                <li><Link to="/hobby/donations" className=""><Icon name="heart" type="fas" size="sm" title="Donations" /> Donations</Link></li>
              </ul>
            </aside>
          </div>
          <div className="column is-9">
            {this.props.children}
          </div>
        </div>

      </section>
    );
  }
}

export default Hobby;
