import './aboutMe.less';
import 'bulma-ext-timeline-css';

import React, { Component } from 'react';
import Card from '../../components/card';
import ExtLink from '../../components/ext-link';
import Icon from '../../components/icon';
import Panel from '../../components/panel';
import { TimelineHeader, TimelineContent } from '../../components/timeline';
import Message from '../../components/message';
import selfImg from '../../assets/imgs/self.jpeg';

class AboutMe extends Component {
  render() {
    const eduPanelTitle = (
      <span>
        <Icon name="graduation-cap" type="fas" size="sm" title="Education Qualifications" /> Education qualifications
      </span>
    );

    const achPanelTitle = (
      <span>
        <Icon name="trophy" type="fas" size="sm" title="Achievements" /> Achievements (besides daily sprint work)
      </span>
    );

    const langPanelTitle = (
      <span>
        <Icon name="language" type="fas" size="sm" title="Languages" /> Languages
      </span>
    );

    const workPanelTitle = (
      <span>
        <Icon name="briefcase" type="fas" size="sm" title="Professional experience" /> Professional experience
      </span>
    );

    const skillsPanelTitle = (
      <span>
        <Icon name="code" type="fas" size="sm" title="Technical skills" /> Technical skills
      </span>
    );

    const downPanelTitle = (
      <span>
        <Icon name="download" type="fas" size="sm" title="Download Resume" /> Resume
      </span>
    );

    const abtmePanelTitle = (
      <span>
        <Icon name="user" type="fas" size="sm" title="About me" /> About me
      </span>
    );

    return (  
      <section className="about-me-component container">
        
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <div className="is-primary">
                <Card
                  img={selfImg}
                  title="Ashwin Hegde"
                  subTitle="Software Engineer and Craftsman, Open Source, JavaScript Engineer, Love amateur wildlife, birds, landscape and nature Photography, Foodie, ..."
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

                <Panel title={abtmePanelTitle}>
                  <p className="is-size-5">
                    A passionate software craftsman with a positive practicing approach towards software craftsmanship.
                  </p>
                  <br/>
                  <p className="is-size-5">
                    Experience in software development that focus on:
                  </p>

                  <ul className="is-size-5">
                    <li>
                      <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Business Requirements" /> Business Requirements.
                    </li>
                    <li>
                      <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Improve developer’s experience, tools and utilities" /> Improve developers experience, tools and utilities.
                    </li>
                    <li>
                      <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="User’s experience" /> Users experience.
                    </li>
                  </ul>
                  <br/>

                  <p className="is-size-5">
                    An astute professional with around ~7 years of experience in application development from scratch, maintenance, 
                    code review and refactoring, unit and functional testing, build, deployment & troubleshooting issues related to projects.
                  </p>
                  <br/>

                  <p className="is-size-5">
                    Author, Tech Speaker, Trainer and Mentor.
                  </p>
                  <br/>

                  <p className="is-size-5">
                    Believer, follower and contributor to open source projects/repositories.
                  </p>
                </Panel>

                <Panel title={achPanelTitle}>
                  <p className="year-title is-size-5 has-text-link has-text-weight-semibold">Year 2018</p>
                  <ul className="is-size-5">
                    <li>
                      Tech speaker in sessions/meetups/conferences (upcoming): 
                      <ul>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="GraphQL - A new API query language" /> GraphQL - A new API query language.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://jsfoo.talkfunnel.com/2018/77-graphql-a-new-api-query-language">Click here to vote</ExtLink>
                          </span>
                        </li>
                        <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="DevTools for GraphQL" /> DevTools for GraphQL.</li>
                        <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Compare GraphQL Clients" /> Compare GraphQL Clients.</li>
                      </ul>
                    </li>
                    <li>
                      Became reviewer and author for Packt publishing
                      <ul>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Hands-on GraphQL for Better RESTful Web Services" /> Hands-on GraphQL for Better RESTful Web Services.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://www.packtpub.com/application-development/hands-graphql-better-restful-web-services-video">Click here to purchase videos</ExtLink>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="year-title is-size-5 has-text-link has-text-weight-semibold">Year 2017</p>
                  <ul className="is-size-5">
                    <li>
                      Became tech speaker in internal JavaScript sessions/meetups/conferences at PayPal. Below are few topics which I covered:
                      <ul>
                        <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Write better RESTful services using GraphQL" /> Write better RESTful services using GraphQL.</li>
                        <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Introduction to NativeScript" /> Introduction to NativeScript.</li>
                        <li><Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Introduction to WebAssembly" /> Introduction to WebAssembly.</li>  
                      </ul>
                    </li>
                  </ul>

                  <p className="year-title is-size-5 has-text-link has-text-weight-semibold">Year 2013 - 2016</p>
                  <ul className="is-size-5">
                    <li>
                      Became internal trainer and mentor at Cybage software. Below are few topics which I covered:
                      <ul>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Learn Backbone to structure your application" /> Learn Backbone to structure your application.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/hegdeashwin/Backbone">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Learn Marionette to structure your Backbone views" /> Learn Marionette to structure your Backbone views.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/hegdeashwin/learning-backbone-marionette">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Webpack for bundling your JavaScript web apps" /> Webpack for bundling your JavaScript web apps.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/Code-by-practice/learning-webpack">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Require.js for your JavaScript web apps" /> Require.js for your JavaScript web apps.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/Code-by-practice/learning-requirejs">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Task runners for JavaScript web apps" /> Task runners for your JavaScript web apps.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/Code-by-practice/learning-js-taskrunners">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                        <li>
                          <Icon name="check-circle" classes="has-text-primary" type="far" size="sm" title="Templating with Handlebars" /> Templating with Handlebars.
                          <span className="tag is-light">
                            <ExtLink linkTo="https://github.com/Code-by-practice/learning-handlebars">Click here to see online notes</ExtLink>
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Panel>

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
