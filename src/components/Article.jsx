// @flow
import React from 'react';
import { generateAlt } from 'utils/strings';

type ArticlePropTypes = {
  title: String,
  headerImg?: String,
  colorScheme?: String,
  excerpt: String
};

const Article = ( { title, headerImg, colorScheme, excerpt }: ArticlePropTypes ): div => (
  <div className={ `Article ${ colorScheme || 'default' }` }>
    <h1>{title}</h1>
    { headerImg && (
      <div className="Article__image">
        <img
          alt={ generateAlt(title) }
          src={ headerImg } />
      </div>
    ) }
    <p className="justify">
      { excerpt }
    </p>
    <div className="Article__footer">
      <span className="Article__footer--item">
        16:00 Apr 05, 2018.
      </span>
    </div>
  </div>
);

export default Article;
