import './footer.less';
import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from '../icon';
import ExtLink from '../ext-link';

class Footer extends Component {
  render() {
    return (  
      <footer className="footer footer-component">
        <div className="container">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <ExtLink linkTo="http://yourshot.nationalgeographic.com/profile/1648246/" classes="social-icon globe">
                <Icon name="globe" type="fas" size="2x" title="Follow me on YourShot National Geographic" />
              </ExtLink>
              <ExtLink linkTo="https://www.github.com/hegdeashwin/" classes="social-icon github">
                <Icon name="github" size="2x" title="Follow me on GitHub" />
              </ExtLink>
              <ExtLink linkTo="https://www.instagram.com/ashwin.hegde3/" classes="social-icon instagram">
                <Icon name="instagram" size="2x" title="Follow me on Instagram" />
              </ExtLink>
              <ExtLink linkTo="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ" classes="social-icon youtube">
                <Icon name="youtube" size="2x" title="Subscribe to my YouTube channel" />
              </ExtLink>
              <ExtLink linkTo="https://stackoverflow.com/users/1923575/ashwin-hegde" classes="social-icon stackoverflow">
                <Icon name="stack-overflow" size="2x" title="Find me on Stack Overflow" />
              </ExtLink>
              <ExtLink linkTo="https://www.linkedin.com/in/hegdeashwin/" classes="social-icon linkedin">
                <Icon name="linkedin" size="2x" title="Connect me on Linkedin" />
              </ExtLink>
              <ExtLink linkTo="https://twitter.com/hegdeashwin3" classes="social-icon twitter">
                <Icon name="twitter" size="2x" title="Follow me on Twitter" />
              </ExtLink>
              <ExtLink linkTo="https://en.wikipedia.org/wiki/User:Hegdeashwin" classes="social-icon wikipedia">
                <Icon name="wikipedia-w" size="2x" title="Find me on Wikipedia" />
              </ExtLink>
              <ExtLink linkTo="mailto:ashwin.hegde3@gmail.com" classes="social-icon email">
                <Icon name="at" size="2x" type="fas" title="Email me at ashwin.hegde3@gmail.com" />
              </ExtLink>
            </div>
          </div>
          <hr />
          <div className="content has-text-centered">
            <p>
              This website is developed and maintained with <i className="fas fa-heart fa-lg" /> by <Link to="#">Ashwin Hegde</Link>.
            </p>
            <p>
              The source code is licensed <ExtLink linkTo="http://opensource.org/licenses/mit-license.php">MIT</ExtLink>. The website content
              is licensed <ExtLink linkTo="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</ExtLink>.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
