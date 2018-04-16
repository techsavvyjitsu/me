import './photography.less';
import React, { Component } from 'react';
import Panel from '../../components/panel';
import Icon from '../../components/icon';
import ExtLink from '../../components/ext-link';
import { birds, animals, underwater } from './fav-wishlist';

class Photography extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
    this.renderChildList = this.renderChildList.bind(this);
  }
  
  renderChildList(items) {
    return items.map((item) => {
      return (
        <li>&bull; {item}</li>
      )
    });
  }

  renderList(items) {
    return items.map((item) => {
      let category = (
        <li>&bull; {item.category}</li>
      );

      if (item.names) {
        category = (
          <li>&raquo; {item.category}
            <ul className="is-size-6">
              {
                this.renderChildList(item.names)
              }
            </ul>
          </li>
        )
      }

      return category;
    });
  }
  
  render() {
    const aniPanelTitle = (
      <span>
        <Icon name="paw" type="fas" size="sm" title="Animals" /> Animals
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

    const galleryPanelTitle = (
      <span>
        <Icon name="qq" size="sm" title="Gallery" /> My Clicks
      </span>
    );

    return (
      <section className="photography-component">
        <p className="is-size-5">
          You can find all my wildlife and bird photography on <ExtLink linkTo="http://yourshot.nationalgeographic.com/profile/1648246/">National Geographic &bull; YourShot</ExtLink> album.
          In my pursuit of happiness for wildlife and bird photography, here are some of my favourites under different categories:
        </p>

        <div className="columns">
          {
            birds &&
            <div className="column">
              <Panel title={birdsPanelTitle}>
                <ul className="is-size-6">{this.renderList(birds)}</ul>
              </Panel>
            </div>
          }

          {
            animals &&
            <div className="column">
              <Panel title={aniPanelTitle}>
                <ul className="is-size-6">{this.renderList(animals)}</ul>
              </Panel>
            </div>
          }

          {
            underwater &&
            <div className="column">
              <Panel title={waterPanelTitle}>
                <ul className="is-size-6">{this.renderList(underwater)}</ul>
              </Panel>
            </div>
          }
        </div>
        
      </section>
    );
  }
}

export default Photography;
