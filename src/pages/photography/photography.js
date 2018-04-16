import './photography.less';
import React, { Component } from 'react';
import Panel from '../../components/panel';
import Icon from '../../components/icon';

class Photography extends Component {
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

    return (
      <section className="photography-component">

        <div claasName="fav-wishlist">
          <p className="is-size-5">
            In my pursuit of happiness for wildlife and bird photography, here are some of my favourites:
          </p>

          <div className="columns">
            <div className="column">
              <Panel title={birdsPanelTitle}>
                <ul className="is-size-6">
                  <li>Owl</li>
                  <li>Macow</li>
                  <li>Parrot</li>
                  <li>BeeHumming</li>
                  <li>Kingfisher</li>
                  <li>Penguin</li>
                  <li>Bird-of-paradise</li>
                  <li>Eagle</li>
                </ul>
              </Panel>
            </div>

            <div className="column">
              <Panel title={aniPanelTitle}>
                <ul className="is-size-6">
                  <li>Red Panda</li>
                  <li>Raccoon</li>
                  <li>Meerkats</li>
                  <li>Hippopotamus</li>
                  <li>Rhinoceros</li>
                  <li>Elephant</li>
                  <li>Tortoise</li>
                  <li>Squirrel Monkey</li>
                </ul>
              </Panel>
            </div>

            <div className="column">
              <Panel title={waterPanelTitle}>
                <ul className="is-size-6">
                  <li>Whale</li>
                  <li>Proffer Fish</li>
                  <li>Turtle</li>
                </ul>
              </Panel>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Photography;
