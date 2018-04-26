import './hobby.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../components/icon';

class Hobby extends Component {
  
  render() {
    return (
      <section className="hobby-component container">
        <div className="columns">
          <div className="column is-3">
            <aside className="menu">
              <ul className="menu-list">
                <li><Link to="/hobby/photography" activeClassName="is-active"><Icon name="images" type="far" size="sm" title="Hobby" /> Photography</Link></li>
                <li><Link to="/hobby/donations" activeClassName="is-active"><Icon name="heart" type="fas" size="sm" title="Donations" /> Donations</Link></li>
                <li><Link to="/hobby/visits" activeClassName="is-active"><Icon name="suitcase" type="fas" size="sm" title="Visited Places" /> Visited Places</Link></li>
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
