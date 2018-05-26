// Packages
import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class TechArticles extends Component {
  render() {
    return (
      <section className="tech-articles-component">
        <Message>
          <p className="is-size-4">A practice introduction to Elasticsearch</p>
          <hr/>
          <ExtLink linkTo="https://medium.com/@hegdeashwin/a-practice-introduction-to-elasticsearch-9a432c65b5c9" classes="button is-warning">
            <Icon name="medium" size="lg" title="Navigate to the project on medium.com" />&nbsp;Medium
          </ExtLink>
        </Message>
      </section>
    );
  }
}

export default TechArticles;
