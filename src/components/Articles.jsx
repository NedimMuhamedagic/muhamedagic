import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Article from 'components/Article';

const masonryOptions = {
  transitionDuration: 100,
};

class Articles extends Component {
  render() {
    return (
      <Masonry
        className={ 'Articles' } // default ''
        disableImagesLoaded={ false } // default 'div'
        elementType={ 'div' } // default {}
        options={ masonryOptions } // default false
        updateOnEachImageLoad={ false }>
        { mockArticles.map( article => <Article { ...article } /> )}
      </Masonry>
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
