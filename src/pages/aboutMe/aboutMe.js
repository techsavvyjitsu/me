import './aboutMe.less';
import 'bulma-ext-timeline-css';

import React, { Component } from 'react';
import Card from '../../components/card';
import ExtLink from '../../components/extLink';
import Icon from '../../components/icon';
import Panel from '../../components/panel';
import { TimelineHeader, TimelineContent } from '../../components/timeline';
import Message from '../../components/message';
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
                  <div className="timeline is-centered">
                    <TimelineHeader>
                      <span className="tag is-primary">April 2017 - Present</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>PayPal India PVT. LTD.</strong></p>
                      <p>Software Engineer 2</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">Oct 2012 - April 2017</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>Cybage Software Pvt. Ltd.</strong></p>
                      <p>Sr. Software Engineer, Web Developer</p>
                    </TimelineContent>

                    <TimelineHeader>
                      <span className="tag is-primary">June 2012 - Oct 2012</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>Sycamore Software Solutions Pvt. Ltd.</strong></p>
                      <p>Software Engineer</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">Dec 2011 - April 2012</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>React1To1 Technologies Pvt. Ltd.</strong></p>
                      <p>Web Application Developer</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">Jan 2008 - Oct 2008</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>Mystical Planet Technologies</strong></p>
                      <p>Web Application Developer - Freelancer</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-medium is-primary">Start</span>
                    </TimelineHeader>
                  </div>
                </Panel>

                <Panel title={skillsPanelTitle}>
                  <Message>
                    <p><strong>Server side</strong></p>
                    <p>GraphQL and REST API development using Node.js, Apollo-Server, GraphCool, ES6 or above, Express, Hapi, 
                    Loopback, Elasticsearch, Sequelize, Passport, Nodemailer, Mongoose, MySQL etc.</p>
                  </Message>

                  <Message>
                    <p><strong>Client side scripting</strong></p>
                    <p>Apollo-Client, Relay Modern, React, ReactNative, Vue, Backbone, jQuery, Flux, 
                    Redux, MobX, Marionette.js, Require.js, Underscore, Electron etc.</p>
                  </Message>

                  <Message>
                    <p><strong>UT & FT</strong></p>
                    <p>Jest, Mocha, Chai, Sinon, Nemo, Nightwatch etc.</p>
                  </Message>

                  <Message>
                    <p><strong>Tools & Utilities</strong></p>
                    <p>npm, Yarn, Webpack, Browserify, Grunt, Gulp, Gemnasium, Travis-CI, Jenkins-CI, 
                    SonarQube, ESLint, TSLint, Prettier etc.</p>
                  </Message>

                  <Message>
                    <p><strong>Source code, Bug management tools</strong></p>
                    <p>Git, (Remotes) GitHub, BitBucket, GitLab. Rally, JIRA, Trello etc.</p>
                  </Message>

                  <Message>
                    <p><strong>Operating System</strong></p>
                    <p>Linux distros (Ubuntu, CentOS etc.), MacOS and Windows.</p>
                  </Message>

                </Panel>

                <Panel title={eduPanelTitle}>
                  <div className="timeline is-centered">
                    <TimelineHeader>
                      <span className="tag is-primary">2012</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>M.C.A.</strong> - Master of Computer Application</p>
                      <p>University of Pune, Pune, India</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">2009</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>B.C.A.</strong> - Bachelor of Computer Application</p>
                      <p>Veer Narmad South Gujarat University, Surat, India</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">2006</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>12<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-primary">2004</span>
                    </TimelineHeader>
                    <TimelineContent tag="April 2017 - Present">
                      <p><strong>10<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                    </TimelineContent>
                    
                    <TimelineHeader>
                      <span className="tag is-medium is-primary">Start</span>
                    </TimelineHeader>
                  </div>
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
