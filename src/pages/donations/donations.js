// Packages
import './donations.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ExtLink from '../../components/ext-link';
import YouTube from '../../components/youtube';
import { orgs } from './donation-list';

class Donations extends Component {
  constructor(props) {
    super(props);

    this.renderWebsites = this.renderWebsites.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  
  renderWebsites(items) {
    return items.map((website) => {
      const parseWebsiteLink = `https://${website.link}`;
      return (
        <li>{website.prefix}<ExtLink linkTo={parseWebsiteLink}>{website.link}</ExtLink></li>
      );
    });
  }

  renderList(items) {
    return items.map((item) => {
      return (
        <div className="card-list-component card mb-4 box-shadow">
          <YouTube embedId={item.youtubeHash} />
          <div className="card-body bg-light">
            <p className="lead card-title">{item.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <ul className="is-size-6">{this.renderWebsites(item.websites)}</ul>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (  
      <section className="donation-component">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/hobby/photography">Hobbies</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My Donations</li>
          </ol>
        </nav>
        <p>
          I do make donations on specific personal events like on my birthdate, happy earth day etc. and here are the list of organizations to whom I support. Please feel free to follow the links and make your own donations.
        </p>

        {this.renderList(orgs)}
      </section>
    );
  }
}

export default Donations;
