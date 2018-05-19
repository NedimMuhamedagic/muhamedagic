import React, { Component } from 'react';
import Article from 'components/Article';
import { mockArticles } from 'mocks/index';

class Articles extends Component {
  render() {
    return (
      <div
        className="Articles">
        { mockArticles.map( article => <Article { ...article } /> )}
      </div>
    );
  }
}

export default Articles;
