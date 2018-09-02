// @flow
import React from 'react';
import Article, { type ArticleComponentProps } from 'components/Article';
import Articles from 'styled/articles';

const mockArticles = [
  {
    key: '1',
    colorScheme: 'purple',
    title: 'Hello world! or how setting up a proper React project can be super fun',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    key: '2',
    colorScheme: 'turquoise',
    title: 'Lorem ipsum dolor sit amet.',
  }, {
    key: '3',
    colorScheme: 'red',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    key: '4',
    colorScheme: 'purple',
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    key: '5',
    colorScheme: 'purple',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    key: '6',
    colorScheme: 'turquoise',
    title: 'Lorem ipsum dolor sit amet.',
  }, {
    key: '7',
    colorScheme: 'red',
    title: 'Hello world! or how setting up a proper React project can be super fun',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    key: '8',
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  }, {
    key: '9',
    colorScheme: 'turquoise',
    title: 'Hello world! or how setting up a proper React project can be super fun',
  }, {
    key: '10',
    colorScheme: 'red',
    title: 'Lorem ipsum dolor sit amet.',
    headerImg: 'http://placehold.it/1200x600',
  },
];

const ArticlesComponent = (): React$Element<typeof Articles> => (
  <Articles>
    {
      mockArticles.map(
        (article: ArticleComponentProps): React$Element<typeof Article> => <Article {...article} />,
      )
    }
  </Articles>
);


export default ArticlesComponent;
