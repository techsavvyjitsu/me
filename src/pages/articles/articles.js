// Packages
import React, { Component } from 'react';
import { Card, CardMedia, CardContent } from '../../components/new-card';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class Articles extends Component {
  render() {
    return (
      <section className="articles-component">
        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">A practice introduction to Elasticsearch</p>
              <hr/>
              <ExtLink linkTo="https://medium.com/@hegdeashwin/a-practice-introduction-to-elasticsearch-9a432c65b5c9" classes="button is-warning">
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

export default Articles;
