import './home.less';
import React, { Component } from 'react';

// Components
import Hero from '../../components/hero';
import { Card, CardMedia, CardContent } from '../../components/card';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (  
      <section className="home-component">
        <Hero />

        <div className="columns features-access has-text-centered">
          <div className="column">
            <Card>
              <CardMedia classes="opensource" type="icon" source="osi" title="Open Source Projects" />
              <CardContent title="Open Source Projects">
                <p>Here are some of my exciting open source projects, learn and contribute</p>
                <Link to="work/projects" className="button is-warning">Browse all Projects</Link>
              </CardContent>
            </Card>
          </div>

          <div className="column">
            <Card>
              <CardMedia type="icon" source="newspaper" title="Tech Blogs and Articles" iconType="far" />
              <CardContent title="Tech Blogs & Articles">
                <p>Here are some of my collection of tech articles and blogs</p>
                <Link to="work/articles" className="button is-warning">Browse all Tech Articles</Link>
              </CardContent>
            </Card>
          </div>

          <div className="column">
            <Card>
              <CardMedia classes="youtube" type="icon" source="youtube" title="Learn through Videos" iconType="fab" />
              <CardContent title="Tech Blogs & Articles">
                <p>Here are some of my collection of tech video series on YouTube</p>
                <Link to="work/videos" className="button is-warning">Browse all Tech Videos</Link>
              </CardContent>
            </Card>
          </div>

          
        </div>

      </section>
    );
  }
}

export default Home;
