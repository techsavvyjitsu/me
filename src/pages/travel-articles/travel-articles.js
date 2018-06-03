// Packages
import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class TravelArticles extends Component {
  render() {
    return (
      <section className="travel-articles-component">
        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Visit to Bannerghatta Biological Park, Bangalore</p>
              <hr/>
              <ExtLink linkTo="https://medium.com/@hegdeashwin/trip-to-bannerghatta-biological-park-9d7240e67588" classes="button is-warning">
                <Icon name="medium" size="lg" title="Navigate to the project on medium.com" />&nbsp;Medium
              </ExtLink>
            </Message>
          </div>
          <div className="column"></div>
        </div>
      </section>
    );
  }
}

export default TravelArticles;
