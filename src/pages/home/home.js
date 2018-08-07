import './home.less';
import React, { Component } from 'react';

// Components
import Icon from '../../components/icon';
import { Link } from 'react-router';
// import Hero from '../../components/hero';
// import { Card, CardMedia, CardContent } from '../../components/card';
// import { Link } from 'react-router';
// import Carousel from '../../components/carousel';

class Home extends Component {
  render() {
    return (  
      <section className="home-component container">
        
        <div className="row columns">
          <div class="column is-one-third">
            <div class="card large">
              <div class="card-image">
                <figure class="image">
                  <img src="http://res.cloudinary.com/hegdeashwin/image/upload/s--Qfrn_92a--/c_scale,q_100,w_1024/v1533409409/business-computer-contemporary-669996.jpg" alt="Tech Blogs and Articles" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4 no-padding">Tech Blogs and Articles</p>
                  </div>
                </div>
                <div class="content has-text-centered">
                  <p>Collection of tech articles and blogs</p>
                  <Link to="work/articles" className="button is-warning">Browse all Articles</Link>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card large">
              <div class="card-image">
                <figure class="image">
                  <img src="http://res.cloudinary.com/hegdeashwin/image/upload/s--zSHrXUAi--/c_scale,w_1024/v1533409411/code-coding-computer-574071_1.jpg" alt="Open Source Projects" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4 no-padding">Open Source Projects</p>
                  </div>
                </div>
                <div class="content has-text-centered">
                  <p>I tend to code software from scratch for web and mobile apps</p>
                  <Link to="work/projects" className="button is-warning">Browse all Projects</Link>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-one-third">
            <div class="card large">
              <div class="card-image">
                <figure class="image">
                  <img src="http://res.cloudinary.com/hegdeashwin/image/upload/s--dkrDRepK--/c_scale,w_1024/v1533409409/camera-dslr-landscape-212372.jpg" alt="Wildlife, Nature and Landscape Photography" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title is-4 no-padding">Photography</p>
                  </div>
                </div>
                <div class="content has-text-centered">
                  <p>Collection of photographs</p>
                  <Link to="hobby/photography" className="button is-warning">Browse all Photos</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Home;
