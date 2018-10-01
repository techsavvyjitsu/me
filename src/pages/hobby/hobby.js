import './hobby.less';
import React, { Component } from 'react';
import { Link } from 'react-router';

class Hobby extends Component {
  
  render() {
    return (
      <section className="hobby-component container">
        <div className="row">
          <div className="col-lg-3 mt-3 mb-3">
            <div className="list-group">
              <Link to="/hobby/photography" className="list-group-item list-group-item-action">
                My Photography
              </Link>
              <Link to="/hobby/donations" className="list-group-item list-group-item-action">
                My Donations
              </Link>
              <Link to="/hobby/visits" className="list-group-item list-group-item-action">
                My Visited Places
              </Link>
              {/*<Link to="/hobby/photos" className="list-group-item list-group-item-action">
                My Photos
              </Link>*/}
              <Link to="/hobby/articles" className="list-group-item list-group-item-action">
                My Travel Articles
              </Link>
            </div>
          </div>
          <div className="col-lg-9 mt-3 mb-3">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export default Hobby;
