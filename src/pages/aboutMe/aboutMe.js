import './aboutMe.less';
import React, { Component } from 'react';
import Card from '../../components/card';
import ExtLink from '../../components/extLink';
import Icon from '../../components/icon';
import Panel from '../../components/panel';
import selfImg from '../../assets/imgs/self.jpeg';

class AboutMe extends Component {
  render() {
    const eduPanelTitle = (
      <span>
        <Icon name="graduation-cap" type="fas" size="lg" title="Education Qualifications" /> Education qualifications
      </span>
    );

    const langPanelTitle = (
      <span>
        <Icon name="language" type="fas" size="lg" title="Languages" /> Languages
      </span>
    );

    const workPanelTitle = (
      <span>
        <Icon name="briefcase" type="fas" size="lg" title="Professional experience" /> Professional experience
      </span>
    );

    const skillsPanelTitle = (
      <span>
        <Icon name="code" type="fas" size="lg" title="Technical skills" /> Technical skills
      </span>
    );

    const downPanelTitle = (
      <span>
        <Icon name="download" type="fas" size="lg" title="Download Resume" /> Resume
      </span>
    );

    return (  
      <section className="about-me-component">
        
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <div className="is-primary">
                <Card
                  img={selfImg}
                  title="Ashwin Hegde"
                  subTitle="ashwin.hegde3@gmail.com"
                  hasThumbnail={false}
                >
                  <Panel title={langPanelTitle}>
                    <p><strong>English</strong> - Professional Proficiency</p>
                    <p><strong>Kanada</strong> - Mother Tongue</p>
                    <p><strong>Hindi</strong> - Fluent</p>
                    <p><strong>Gujarat</strong> - Fluent</p>
                    <p><strong>Marathi</strong> - Limited</p>
                    <p><strong>Tamil</strong> - Learning</p>
                    <p><strong>Spanish</strong> - Learning</p>
                  </Panel>

                  <Panel title={downPanelTitle}>
                    <div className="buttons">
                      <ExtLink linkTo="https://www.linkedin.com/in/hegdeashwin/" classes="button is-warning">
                        PDF
                      </ExtLink>
                      <ExtLink linkTo="https://www.linkedin.com/in/hegdeashwin/" classes="button is-warning">
                        Plain Text
                      </ExtLink>
                    </div>
                  </Panel>

                </Card>
              </div>

              

            </div>
            <div className="column is-9">
              <div className="bd-notification is-info">
                
                <p className="is-size-5">
                  A software craftsman with a positive practicing approach towards software craftsmanship. 
                </p>

                <ul className="is-size-5">
                  <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Point 1" />  An astute professional with around ~7 years of experience in application development for web.</li>
                  <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Point 2" /> Work experience on enterprise application development with scratch, maintenance, code review,
                  code refactoring, unit testing, functional testing, build, deployment & troubleshooting issues
                  related to projects.</li>
                  <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Point 3" /> Trainer, mentor, author and tech speaker for JavaScript & Node.js related works.</li>
                  <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Point 4" /> Believer, follower and contributor to open source projects/repositories.</li>
                </ul>

                <Panel title={workPanelTitle}>
                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>PayPal India PVT. LTD.</strong> - Software Engineer 2 | 2017 - Present</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Cybage Software Pvt. Ltd.</strong> - Sr. Software Engineer, Web Developer | 2012 - 2017</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Sycamore Software Solutions Pvt. Ltd.</strong> - Software Engineer | 2012</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>React1To1 Technologies Pvt. Ltd.</strong> - Web Application Developer | 2011 - 2012</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Mystical Planet Technologies</strong> - Web Application Developer - Freelancer | 2008</p>
                    </div>
                  </article>
                </Panel>

                <Panel title={skillsPanelTitle}>
                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Server side</strong></p>
                      <p>GraphQL and REST API development using Node.js, Apollo-Server, GraphCool, ES6 or above, Express, Hapi, 
                      Loopback, Elasticsearch, Sequelize, Passport, Nodemailer, Mongoose, MySQL etc.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Client side scripting</strong></p>
                      <p>Apollo-Client, Relay Modern, React, ReactNative, Vue, Backbone, jQuery, Flux, 
                      Redux, MobX, Marionette.js, Require.js, Underscore, Electron etc.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>UT & FT</strong></p>
                      <p>Jest, Mocha, Chai, Sinon, Nemo, Nightwatch etc.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Tools & Utilities</strong></p>
                      <p>npm, Yarn, Webpack, Browserify, Grunt, Gulp, Gemnasium, Travis-CI, Jenkins-CI, 
                      SonarQube, ESLint, TSLint, Prettier etc.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Source code, Bug management tools</strong></p>
                      <p>Git, (Remotes) GitHub, BitBucket, GitLab. Rally, JIRA, Trello etc.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>Operating System</strong></p>
                      <p>Linux distros (Ubuntu, CentOS etc.), MacOS and Windows.</p>
                    </div>
                  </article>

                </Panel>

                <Panel title={eduPanelTitle}>
                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>M.C.A.</strong> - Master of Computer Application | University of Pune, Pune, India.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>B.C.A.</strong> - Bachelor of Computer Application | Veer Narmad South Gujarat University, Surat, India.</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>12<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                    </div>
                  </article>

                  <article className="message is-info">
                    <div className="message-body">
                      <p><strong>10<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                    </div>
                  </article>
                </Panel>

              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default AboutMe;
