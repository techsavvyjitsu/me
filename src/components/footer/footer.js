import './footer.less';
import React, { Component } from 'react';
import { Link } from 'react-router';

import Icon from '../icon';
import ExtLink from '../ext-link';

class Footer extends Component {
  render() {
    return (
      <footer className="footer-component page-footer font-small special-color-dark">
        <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <ExtLink linkTo="http://yourshot.nationalgeographic.com/profile/1648246/" classes="social-icon globe">
                <Icon name="globe" type="fas" size="2x" title="Follow me on YourShot National Geographic" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://www.github.com/hegdeashwin/" classes="social-icon github">
                <Icon name="github" size="2x" title="Follow me on GitHub" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://www.instagram.com/ashwin.hegde3/" classes="social-icon instagram">
                <Icon name="instagram" size="2x" title="Follow me on Instagram" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://www.pexels.com/@ashwin-hegde-544866" classes="social-icon instagram">
                <Icon name="camera" type="fas" size="2x" title="Follow me on Pexels" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://medium.com/@hegdeashwin" classes="social-icon github">
                <Icon name="medium" size="2x" title="Clap on Medium" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://www.youtube.com/channel/UCQHsDMLPAkQhXx26ofphqYQ" classes="social-icon youtube">
                <Icon name="youtube" size="2x" title="Subscribe to my YouTube channel" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://stackoverflow.com/users/1923575/ashwin-hegde" classes="social-icon stackoverflow">
                <Icon name="stack-overflow" size="2x" title="Find me on Stack Overflow" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://www.linkedin.com/in/hegdeashwin/" classes="social-icon linkedin">
                <Icon name="linkedin" size="2x" title="Connect me on Linkedin" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="https://en.wikipedia.org/wiki/User:Hegdeashwin" classes="social-icon wikipedia">
                <Icon name="wikipedia-w" size="2x" title="Find me on Wikipedia" />
              </ExtLink>
            </li>
            <li className="list-inline-item">
              <ExtLink linkTo="mailto:ashwin.hegde3@gmail.com" classes="social-icon email">
                <Icon name="at" size="2x" type="fas" title="Email me at ashwin.hegde3@gmail.com" />
              </ExtLink>
            </li>
          </ul>
        </div>
        <hr className="hr-divider"/>
        <div className="footer-copyright text-center">
          <p>
            This website is developed and maintained with <Icon name="heart" size="lg" type="fas"/> by <Link to="#">Ashwin Hegde</Link>
          </p>
          <p>and supports&nbsp;
            <Icon name="chrome" size="lg" type="fab" title="Support on Google Chrome"/>&nbsp;
            <Icon name="firefox" size="lg" type="fab" title="Support on Mozilla Firefox"/>&nbsp;
            <Icon name="safari" size="lg" type="fab" title="Support on Apple Safari MacOS"/>&nbsp;
            <Icon name="internet-explorer" size="lg" type="fab" title="Support on Microsoft Internet Explore 11 or above"/>&nbsp;
            <Icon name="edge" size="lg" type="fab" title="Support on Microsoft Edge"/> browsers on&nbsp;
            <Icon name="mobile-alt" size="lg" type="fas" title="Support on mobile"/>&nbsp;
            <Icon name="tablet-alt" size="lg" type="fas" title="Support on tabs"/>&nbsp;
            <Icon name="desktop" size="lg" type="fas" title="Support on desktop"/>&nbsp; devices
          </p>
          <p>
            The source code is licensed <ExtLink linkTo="http://opensource.org/licenses/mit-license.php">MIT</ExtLink>. The website content
            is licensed <ExtLink linkTo="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</ExtLink>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
