// Packages
import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class Slides extends Component {
  render() {
    return (
      <section className="slides-component">
        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">GraphQL Clients & DevTools</p>
              <p>Quick introduction to GraphQL Clients and DevTools for GraphQL</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/gq-clients-devtools" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>

          <div className="column">
            <Message>
              <p className="is-size-4">Better RESTful with GraphQL</p>
              <p>Quick introduction to GraphQL and how it can be used as better RESTful and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/gq-clients-devtools" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to WebAssembly</p>
              <p>Quick introduction to WebAssembly and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/webasm" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to NativeScript</p>
              <p>Quick introduction to mobile apps development using NativeScript and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/nscript" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to Mocha & Chai</p>
              <p>Quick introduction to JavaScript Unit Testing with Mocha & Chai and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/mocha-chai" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to Require.js</p>
              <p>Quick introduction to JavaScript module loading with Require.js and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/requirejs" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>

          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to Grunt</p>
              <p>Quick introduction to JavaScript Task Runner with Grant.js and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/grunt" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Git - Part 2</p>
              <p>Quick introduction to usage of Git by remote vendors and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/dvcs-part-2" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>

          <div className="column">
            <Message>
              <p className="is-size-4">Git - Part 1</p>
              <p>Quick introduction to Git distributed version control system and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/dvcs-part-1" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to npm</p>
              <p>Quick introduction to JavaScript package manager and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/npm" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
          <div className="column">
            <Message>
              <p className="is-size-4">Introduction to Node.js</p>
              <p>Quick introduction to Node.js, history, architecture, and its basics</p>
              <hr/>
              <ExtLink linkTo="http://slides.com/ashwinhegde/nodejs" classes="button is-warning">
                <Icon name="slideshare" size="lg" title="Navigate to the slides on slides.com" />&nbsp;Slides
              </ExtLink>
            </Message>
          </div>
        </div>
      </section>
    );
  }
}

export default Slides;
