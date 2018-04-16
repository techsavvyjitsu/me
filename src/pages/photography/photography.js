import React, { Component } from 'react';
import Panel from '../../components/panel';
import Icon from '../../components/icon';

class Photography extends Component {
  render() {
    return (
      <section className="photography-component container">
        <p className="is-size-5">
          In my pursuit of happiness for wildlife and bird photography, I always want to photograph my favourite animals, birds
          and here is my wishlist.
        </p>

        <div className="columns">
          <div className="column">
            <Panel title="Birds">
              <ul className="is-size-5">
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
            <Panel title="Land Animals">
              <ul className="is-size-5">
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
            <Panel title="Water Animals">
              <ul className="is-size-5">
                <li>Whale</li>
                <li>Proffer Fish</li>
                <li>Turtle</li>
              </ul>
            </Panel>
          </div>
        </div>
      </section>
    );
  }
}

export default Photography;
