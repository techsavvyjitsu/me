// Packages
import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class Projects extends Component {
  render() {
    return (
      <section className="projects-component">
        <Message>
          <div className="columns">
            <div className="column is-narrow">
              <img className="brand-logo" src="https://avatars3.githubusercontent.com/u/38310101" alt="Get React Component Logo" />
            </div>
            <div className="column">
              <p className="is-size-4">Get React Components</p>
              <p>Build React components using Bulma as base CSS framework</p>
              <hr/>
              <ExtLink linkTo="https://github.com/get-react-components" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>&nbsp;
              <ExtLink linkTo="https://www.getreactcomponents.com" classes="button is-warning">
                <Icon name="home" size="lg" type="fas" title="Navigate to the project on Home page" />&nbsp;Website
              </ExtLink>
            </div>
          </div>
        </Message>

        <Message>
          <div className="columns">
            <div className="column is-narrow">
              <img className="brand-logo" src="https://avatars3.githubusercontent.com/u/23246584" alt="Get React Component Logo" />
            </div>
            <div className="column">
              <p className="is-size-4">Get Vue Components</p>
              <p>Build Vue components using Bulma as base CSS framework</p>
              <hr/>
              <ExtLink linkTo="https://github.com/get-vue-components" classes="button is-warning">
                <Icon name="github" size="lg" title="Navigate to the project on GitHub.com" />&nbsp;GitHub
              </ExtLink>&nbsp;
              <ExtLink linkTo="https://www.getvuecomponents.com" classes="button is-warning">
                <Icon name="home" size="lg" type="fas" title="Navigate to the project on Home page" />&nbsp;Website
              </ExtLink>
            </div>
          </div>
        </Message>

      </section>
    );
  }
}

export default Projects;
