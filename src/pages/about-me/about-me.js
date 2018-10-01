import './about-me.less';
import 'bulma-ext-timeline-css';

import React from 'react';
import { Cards, CardsMedia, CardsContent, CardsHeader } from '../../components/cards';
import ExtLink from '../../components/ext-link';
import Icon from '../../components/icon';
import { TimelineHeader, TimelineContent } from '../../components/timeline';
import Message from '../../components/message';

class AboutMe extends React.Component {
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

    const abtmePanelTitle = (
      <span>
        <Icon name="user" type="fas" size="sm" title="About me" /> About me
      </span>
    );

    return (  
      <section className="about-me-component container">

        <div className="row">
          <div className="col-lg-3 side-content">
            <Cards>
              <CardsMedia type="image" source="https://res.cloudinary.com/hegdeashwin/image/upload/v1533905081/self.jpg" alt="Profile Picture" />
              <CardsContent
                title="Ashwin Hegde"
                subTitle="Software Engineer and Craftsman, Open Source, JavaScript Engineer, Amateur wildlife, birds, landscape and nature Photography, Foodie, ...">
                <ExtLink linkTo="https://www.linkedin.com/in/hegdeashwin/" classes="btn btn-warning btn-block">
                  Download Resume
                </ExtLink>
              </CardsContent>
            </Cards>

            <Cards>
              <CardsHeader>{langPanelTitle}</CardsHeader>
              <CardsContent>
                <p className="text-primary bg-light shadow-sm">Professional Proficiency</p>
                <ul>
                  <li>English</li>
                </ul>
                <p className="text-primary bg-light shadow-sm">Mother Tongue</p>
                <ul>
                  <li>Kanada</li>
                </ul>
                <p className="text-primary bg-light shadow-sm">Fluent</p>
                <ul>
                  <li>Hindi</li>
                  <li>Gujarat</li>
                </ul>
                <p className="text-primary bg-light shadow-sm">Limited</p>
                <ul>
                  <li>Marathi</li>
                </ul>
                <p className="text-primary bg-light shadow-sm">Learning</p>
                <ul>
                  <li>Tamil</li>
                  <li>Spanish</li>
                </ul>
              </CardsContent>
            </Cards>
          </div>
          <div className="col-lg-9 main-content">
            <Cards>
              <CardsHeader>{abtmePanelTitle}</CardsHeader>
              <CardsContent>
                <p>A passionate software craftsman with a positive practicing approach towards software craftsmanship.</p>
                <p>Experience in software development that focus on:</p>
                <p>
                  <ul className="hide-list-style">
                    <li>
                      <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Business requirements" /> Business requirements.
                    </li>
                    <li>
                      <Icon name="check-circle" classes="text-success" type="far" size="sm" title="User experience" /> User experience.
                    </li>
                    <li>
                      <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Developer experience and utilities" /> Developer experience and utilities.
                    </li>
                  </ul>
                </p>
                <p>
                  An astute professional with around ~7 years of experience in application development from scratch, maintenance, 
                  code review and refactoring, unit and functional testing, build, deployment & troubleshooting issues related to projects.
                </p>
                <p>
                  Author, Tech Speaker, Trainer and Mentor.
                </p>
                <p>
                  Believer, follower and contributor to open source projects/repositories.
                </p>
              </CardsContent>
            </Cards>

            <Cards>
              <CardsHeader>{achPanelTitle}</CardsHeader>
              <CardsContent>
                <p className="text-primary bg-light shadow-sm">Year 2018</p>
                <ul>
                  <li>
                    Tech speaker in sessions/meetups/conferences: 
                    <ul>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="GraphQL - A new API query language" /> GraphQL - A new API query language.
                        [ <ExtLink linkTo="https://jsfoo.talkfunnel.com/2018/77-graphql-a-new-api-query-language">Click here to vote</ExtLink> ]
                      </li>
                      <li><Icon name="check-circle" classes="text-success" type="far" size="sm" title="DevTools for GraphQL" /> DevTools for GraphQL.</li>
                      <li><Icon name="check-circle" classes="text-success" type="far" size="sm" title="Compare GraphQL Clients" /> Compare GraphQL Clients.</li>
                    </ul>
                  </li>
                  <li>
                    Became reviewer and author for Packt publishing:
                    <ul>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Hands-on GraphQL for Better RESTful Web Services" /> Hands-on GraphQL for Better RESTful Web Services.
                        [ <ExtLink linkTo="https://www.packtpub.com/application-development/hands-graphql-better-restful-web-services-video">Click here to purchase videos</ExtLink> ]
                      </li>
                    </ul>
                  </li>
                </ul>

                <p className="text-primary bg-light shadow-sm">Year 2017</p>
                <ul>
                  <li>
                    Became tech speaker in internal JavaScript sessions/meetups/conferences at PayPal. Below are few topics which I covered:
                    <ul>
                      <li><Icon name="check-circle" classes="text-success" type="far" size="sm" title="Write better RESTful services using GraphQL" /> Write better RESTful services using GraphQL.</li>
                      <li><Icon name="check-circle" classes="text-success" type="far" size="sm" title="Introduction to NativeScript" /> Introduction to NativeScript.</li>
                      <li><Icon name="check-circle" classes="text-success" type="far" size="sm" title="Introduction to WebAssembly" /> Introduction to WebAssembly.</li>  
                    </ul>
                  </li>
                </ul>

                <p className="text-primary bg-light shadow-sm">Year 2013 - 2016</p>
                <ul>
                  <li>
                    Became internal trainer and mentor at Cybage software. Below are few topics which I covered:
                    <ul>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Learn Backbone to structure your application" /> Learn Backbone to structure your application.
                        [ <ExtLink linkTo="https://github.com/hegdeashwin/Backbone">Click here to see online notes</ExtLink> ]
                      </li>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Learn Marionette to structure your Backbone views" /> Learn Marionette to structure your Backbone views.
                        [ <ExtLink linkTo="https://github.com/hegdeashwin/learning-backbone-marionette">Click here to see online notes</ExtLink> ]
                      </li>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Webpack for bundling your JavaScript web apps" /> Webpack for bundling your JavaScript web apps.
                        [ <ExtLink linkTo="https://github.com/Code-by-practice/learning-webpack">Click here to see online notes</ExtLink> ]
                      </li>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Require.js for your JavaScript web apps" /> Require.js for your JavaScript web apps.
                        [ <ExtLink linkTo="https://github.com/Code-by-practice/learning-requirejs">Click here to see online notes</ExtLink> ]
                      </li>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Task runners for JavaScript web apps" /> Task runners for your JavaScript web apps.
                        [ <ExtLink linkTo="https://github.com/Code-by-practice/learning-js-taskrunners">Click here to see online notes</ExtLink> ]
                      </li>
                      <li>
                        <Icon name="check-circle" classes="text-success" type="far" size="sm" title="Templating with Handlebars" /> Templating with Handlebars.
                        [ <ExtLink linkTo="https://github.com/Code-by-practice/learning-handlebars">Click here to see online notes</ExtLink> ]
                      </li>
                    </ul>
                  </li>
                </ul>
              </CardsContent>
            </Cards>

            <Cards>
              <CardsHeader>{workPanelTitle}</CardsHeader>
              <CardsContent>
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

                <br/>
                <p>Note - year indicates range from start to end</p>
              </CardsContent>
            </Cards>

            <Cards>
              <CardsHeader>{skillsPanelTitle}</CardsHeader>
              <CardsContent>
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
              </CardsContent>
            </Cards>

            <Cards>
              <CardsHeader>{eduPanelTitle}</CardsHeader>
              <CardsContent>
                <div className="timeline is-centered">
                  <TimelineHeader>
                    <span className="tag is-primary">2012</span>
                  </TimelineHeader>
                  <TimelineContent>
                    <p><strong>M.C.A.</strong> - Master of Computer Application</p>
                    <p>University of Pune, Pune, India</p>
                  </TimelineContent>
                  
                  <TimelineHeader>
                    <span className="tag is-primary">2009</span>
                  </TimelineHeader>
                  <TimelineContent>
                    <p><strong>B.C.A.</strong> - Bachelor of Computer Application</p>
                    <p>Veer Narmad South Gujarat University, Surat, India</p>
                  </TimelineContent>
                  
                  <TimelineHeader>
                    <span className="tag is-primary">2006</span>
                  </TimelineHeader>
                  <TimelineContent>
                    <p><strong>12<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                  </TimelineContent>
                  
                  <TimelineHeader>
                    <span className="tag is-primary">2004</span>
                  </TimelineHeader>
                  <TimelineContent>
                    <p><strong>10<sup>th</sup> Science</strong> - G.S.H.S.E. Board, Gandhinagar, India</p>
                  </TimelineContent>
                  
                  <TimelineHeader>
                    <span className="tag is-medium is-primary">Start</span>
                  </TimelineHeader>
                </div>
                  
                <br/>
                <p>Note - year indicates the course completion year</p>
              </CardsContent>
            </Cards>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
