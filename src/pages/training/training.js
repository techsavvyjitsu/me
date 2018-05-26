// Packages
import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class Training extends Component {
  render() {
    return (
      <section className="training-component">
        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Backbone Training Kit</p>
              <p>This training kit has been developed to learn the basics of Backbone.js</p>
              <hr/>
              <ExtLink linkTo="http://github.com/hegdeashwin/Backbone" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>
            </Message>
          </div>

          <div className="column">
            <Message>
              <p className="is-size-4">Node.js Training Kit</p>
              <p>This training kit will teach you the basics to advance of Node.js and JavaScript package manager</p>
              <hr/>
              <ExtLink linkTo="http://github.com/hegdeashwin/Server-Side-Node.js" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Marionette Training Kit</p>
              <p>This training kit has been developed to learn the basics of Marionette - Backbone's framework</p>
              <hr/>
              <ExtLink linkTo="http://github.com/hegdeashwin/learning-backbone-marionette" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>
            </Message>
          </div>

          <div className="column">
            <Message>
              <p className="is-size-4">Go Training Kit</p>
              <p>This training kit will teach you the basics of Go programming language</p>
              <hr/>
              <ExtLink linkTo="http://github.com/Code-by-practice/learning-go-lang" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}

export default Training;
