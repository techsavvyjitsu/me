import './photography.less';
import React, { Component } from 'react';
import Panel from '../../components/panel';
import { Link } from 'react-router';
import Icon from '../../components/icon';
import ExtLink from '../../components/ext-link';
import { birds, animals, underwater } from './fav-wishlist';

const wikiBaseUrl = `https://en.wikipedia.org/wiki/`;

class Photography extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.renderChildList = this.renderChildList.bind(this);
  }
  
  renderChildList(items) {
    return items.map((item, index) => {
      const parseLink = `${wikiBaseUrl}${item.linkToWiki}`;
      const childEl = (
        <ExtLink linkTo={parseLink}>{item.category}</ExtLink>
      );

      if (items.length === index+1) {
        return childEl;
      }

      return (
        <span>{childEl}, </span>
      )
    });
  }

  renderList(items) {
    return items.map((item) => {
      const parseLink = `${wikiBaseUrl}${item.linkToWiki}`;
      let category = (
        <li className="has-background-grey-lighter">
          <ExtLink linkTo={parseLink}>{item.category}</ExtLink>
        </li>
      );

      if (item.types) {
        category = (
          <li>{item.category}: {this.renderChildList(item.types)}</li>
        )
      }

      return category;
    });
  }
  
  render() {
    const aniPanelTitle = (
      <span>
        <Icon name="paw" type="fas" size="sm" title="Animals" /> Animals &amp; Reptiles
      </span>
    );

    const birdsPanelTitle = (
      <span>
        <Icon name="earlybirds" size="sm" title="Birds" /> Birds
      </span>
    );

    const waterPanelTitle = (
      <span>
        <Icon name="qq" size="sm" title="Underwater" /> Underwater
      </span>
    );

    return (
      <section className="photography-component">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/hobby/photography">Hobbies</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My Photography</li>
          </ol>
        </nav>

        <p>
          In my pursuit of happiness for wildlife and bird watching and photography, here are some of my favourites.
          You can find my wildlife and bird photography on <ExtLink linkTo="http://yourshot.nationalgeographic.com/profile/1648246/">National Geographic &bull; YourShot</ExtLink> album,
          please feel free to share, like and comments.
        </p>

        <div className="row">
          {
            birds &&
            <div className="col-md-4">
              <Panel title={birdsPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(birds)}</ul>
              </Panel>
            </div>
          }

          {
            animals &&
            <div className="col-md-4">
              <Panel title={aniPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(animals)}</ul>
              </Panel>
            </div>
          }

          {
            underwater &&
            <div className="col-md-4">
              <Panel title={waterPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(underwater)}</ul>
              </Panel>
            </div>
          }
        </div>
      </section>
    );
  }
}

export default Photography;
