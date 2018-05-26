import './work.less';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Icon from '../../components/icon';

class Work extends Component {
  render() {
    return (
      <section className="work-component container">
        <div className="columns">
          <div className="column is-3">
            <aside className="menu">
              <ul className="menu-list">
                <li><Link to="/work/projects" activeClassName="is-active"><Icon name="osi" size="sm" title="Projects" /> Projects</Link></li>
                <li><Link to="/work/training" activeClassName="is-active"><Icon name="leanpub" type="fab" size="sm" title="Training" /> Training</Link></li>
                <li><Link to="/work/articles" activeClassName="is-active"><Icon name="newspaper" type="fas" size="sm" title="Tech Articles" /> Tech Articles</Link></li>
                <li><Link to="/work/slides" activeClassName="is-active"><Icon name="slideshare" type="fab" size="sm" title="Slides" /> Slides</Link></li>
              </ul>
            </aside>
          </div>
          <div className="column is-9">
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
