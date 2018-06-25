import './photography.less';
import React, { Component } from 'react';
import Panel from '../../components/panel';
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
        <p className="is-size-5">
          In my pursuit of happiness for wildlife and bird watching and photography, here are some of my favourites.
        </p>

        <div className="columns">
          {
            birds &&
            <div className="column">
              <Panel title={birdsPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(birds)}</ul>
              </Panel>
            </div>
          }

          {
            animals &&
            <div className="column">
              <Panel title={aniPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(animals)}</ul>
              </Panel>
            </div>
          }

          {
            underwater &&
            <div className="column">
              <Panel title={waterPanelTitle}>
                <ul className="is-size-6 parent-list">{this.renderList(underwater)}</ul>
              </Panel>
            </div>
          }
        </div>

        <p className="is-size-5">
          You can find my wildlife and bird photography on <ExtLink linkTo="http://yourshot.nationalgeographic.com/profile/1648246/">National Geographic &bull; YourShot</ExtLink> album,
          please feel free to share, like and comments.
        </p>
        
        {/*<div className="parallax">
          <div className="my-fav-pic my-fav-pic-1">
            <div className="copyright has-text-black">
              Copyright 2018 &copy; Ashwin Hegde
            </div>
          </div>

          <section className="photo-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>

          <div className="my-fav-pic my-fav-pic-2">
            <div className="copyright has-text-black">
              Copyright 2018 &copy; Ashwin Hegde
            </div>
          </div>

          <section className="photo-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>

          <div className="my-fav-pic my-fav-pic-3">
            <div className="copyright has-text-black">
              Copyright 2018 &copy; Ashwin Hegde
            </div>
          </div>

          <section className="photo-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>

          <div className="my-fav-pic my-fav-pic-4">
            <div className="copyright has-text-black">
              Copyright 2018 &copy; Ashwin Hegde
            </div>
          </div>

          <section className="photo-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </section>
        </div> */}

      </section>
    );
  }
}

export default Photography;
