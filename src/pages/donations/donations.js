// Packages
import './donations.less';
import React, { Component } from 'react';
import Panel from '../../components/panel';
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
      let labelWebsite = 'the website: ';
      if (item.websites && item.websites.length > 1) {
        labelWebsite = 'these websites: ';
      }

      return (
        <div className="columns single-org-details">
          <div className="column">
            <h2 className="is-size-6 has-text-info has-text-weight-semibold">{item.title}</h2>
            <p className="website is-size-6">Please visit {labelWebsite} for more information on donation: </p>
            <ul className="is-size-6">{this.renderWebsites(item.websites)}</ul>
          </div>
          <div className="column">
            <YouTube embedId={item.youtubeHash} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (  
      <section className="donations-component">
        <Panel title="Donations for Wildlife shelter, food supply, protection, etc.">
          {this.renderList(orgs)}
          {/*<div className="rows">
            <div className="row">
              <YouTube embedId="tPZzaPeZutw" />
            </div>
    </div> */}
        </Panel>
      </section>
    );
  }
}

export default Donations;
