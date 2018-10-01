import './travel-articles.less';
import React from 'react';
import ExtLink from '../../components/ext-link';
import { Link } from 'react-router';
import { orgs } from './travel-list';
import Icon from '../../components/icon';

class TravelArticles extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList(items) {
    return items.map((item) => {
      return (
        <div className="card-list-component card mb-4 box-shadow">
          <img className="flex-auto d-none d-md-block img-fluid" src={item.imgsrc} alt={item.title} />
          <div className="card-body bg-light">
            <ExtLink linkTo={item.link}>
              <p className="lead card-title">{item.title}</p>
            </ExtLink>
            <p className="card-text mt-3 mb-auto">{item.desc}</p>
            <div className="mb-1 text-muted">{item.publish}</div>
            <ExtLink linkTo={item.link} classes="btn btn-primary">
              <Icon name="medium" size="lg" title="Navigate to the project on medium.com" />&nbsp;Medium
            </ExtLink>
          </div>
        </div>
      );
    });
  }

  render() {
    return (  
      <section className="donation-component">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/hobby/photography">Hobbies</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My Travel Articles</li>
          </ol>
        </nav>
        <p>
          I love to travel across world for photography, learn about different people and their culture, languages etc.
          Here are some of my articles where I write about my travel experience, please feel free to share, like and comments. 
        </p>

        {this.renderList(orgs)}
      </section>
    );
  }
}

export default TravelArticles;
