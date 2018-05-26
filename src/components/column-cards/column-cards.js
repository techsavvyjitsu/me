import React, { Component } from 'react';
import ExtLink from '../../components/ext-link';
import Message from '../../components/message';
import Icon from '../../components/icon';

class ColumnCards extends Component {
  constructor(props) {
    super(props);

    this.renderMessageColumn = this.renderMessageColumn.bind(this);
    this.renderColumns = this.renderColumns.bind(this);
  }
  
  renderMessageColumn({ title, describe, links }) {
    let slidesDotCom = 'http://slides.com/ashwinhegde/';
    let githubDotCom = 'https://github.com/';

    if (links.slides) {
      slidesDotCom = `${slidesDotCom}${links.slides}`;
    }

    if (links.github) {
      githubDotCom = `${githubDotCom}${links.github}`;
    }

    return (
      <div className="column" key={title}>
        <Message>
          <p className="is-size-4">{title}</p>
          {
            describe &&
            <p className="is-size-6">{describe}</p>
          }
          <hr/>
          {
            links.slides &&
            <ExtLink linkTo={slidesDotCom} classes="button is-warning">
              <Icon name="slideshare" size="lg" title="Navigate to the project on Slides.com" />&nbsp;Slides
            </ExtLink>
          }
          {
            links.github &&
            <ExtLink linkTo={githubDotCom} classes="button is-warning">
              <Icon name="github" size="lg" title="Navigate to the project on Github.com" />&nbsp;GitHub
            </ExtLink>
          }
        </Message>
      </div>
    )
  }

  renderColumns(column, index) {
    return (
      <div className="columns" key={index}>{column}</div>
    )
  }
  
  parseDataSchema({ data }) {
    let row = [];

    while (data && data.length) {
      row.push(data.splice(0, 2));
    }

    return row;
  }

  render() {
    console.log(this.props.data);
    const data = this.parseDataSchema(this.props.data);
    console.log(data);
    let cardsCollection = data.map((infos, index) => {
      let columnInfo = infos.map((info) => {
        return this.renderMessageColumn(info);
      });

      return this.renderColumns(columnInfo, index);
    });

    return (
      <div className="column-cards-component">{cardsCollection}</div>
    )
  }
}

export default ColumnCards;
