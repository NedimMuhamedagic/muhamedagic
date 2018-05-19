// @flow
import React from 'react';
import { generateAlt } from 'utils/strings';

type ArticlePropTypes = {
  title: String,
  headerImg?: String,
  colorScheme?: String
};

const Article = ( { title, headerImg, colorScheme }: ArticlePropTypes ): div => (
  <div className={ `Article ${ colorScheme || 'default' }` }>
    <h1>{title}</h1>
    { headerImg && (
      <div className="Article__image">
        <img
          alt={ generateAlt(title) }
          src={ headerImg } />
      </div>
    ) }
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non sollicitudin massa, ut lobortis sem. Aliquam erat volutpat. Mauris rhoncus, tellus vel posuere iaculis, lectus erat vulputate nulla, a sagittis sem risus vitae erat. Donec convallis efficitur urna, et iaculis massa convallis eget. Praesent eget pulvinar erat. Cras pretium, mauris in venenatis ornare, urna ipsum iaculis felis, vel finibus arcu sapien a leo. Phasellus vel blandit justo, nec hendrerit turpis. Fusce imperdiet pulvinar cursus. Ut dapibus, eros commodo pharetra sagittis, augue ante tincidunt odio, non sollicitudin augue augue id purus.
    </p>
    <div className="Article__footer">
      <span className="Article__footer--item">
        16:00 Apr 05, 2018.
      </span>
    </div>
  </div>
);

export default Article;
