import React, { Component } from 'react';
import Article from 'components/Article';

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

const mockArticles = [
  {
    colorScheme: 'purple',
    title: 'Hello world! or how setting up a proper React project can be super fun',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    colorScheme: 'turquoise',
    title: 'Lorem ipsum dolor sit amet.',
  }, {
    colorScheme: 'red',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    colorScheme: 'purple',
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    colorScheme: 'purple',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    colorScheme: 'turquoise',
    title: 'Lorem ipsum dolor sit amet.',
  }, {
    colorScheme: 'red',
    title: 'Hello world! or how setting up a proper React project can be super fun',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    colorScheme: 'turquoise',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    colorScheme: 'red',
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  },
];

export default Articles;
