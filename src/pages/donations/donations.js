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

    this.renderList = this.renderList.bind(this);
  }
  
  renderList(items) {
    return items.map((item) => {
      let category = (
        <li className="has-background-grey-lighter">
          <ExtLink linkTo={item.linkTo}>{item.text}</ExtLink>
        </li>
      );

      return category;
    });
  }

  render() {
    return (  
      <section className="donations-component">
        <Panel title="NLWS - Northern Lights Wildlife Shelter">
          <div className="rows">
            <div className="row">
              <p className="website is-size-6">Visit Website: </p>
              <ul className="is-12 is-size-6 parent-list">{this.renderList(orgs)}</ul>
            </div>
            <div className="row">
              <YouTube embedId="tPZzaPeZutw" />
            </div>
          </div>
        </Panel>
      </section>
    );
  }
}

export default Donations;
