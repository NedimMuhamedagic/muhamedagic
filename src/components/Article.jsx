// @flow
import React from 'react';
import { generateAlt } from 'utils/strings';
import { Article, ArticleImage, ArticleTitle } from 'styled/article';
import P from 'styled';

export type ArticleComponentProps = {
  title: string,
  headerImg?: string,
  colorScheme?: string
};

const ArticleComponent = ({ title, headerImg, colorScheme = 'default' }: ArticleComponentProps): React$Element<typeof Article> => (
  <Article colorScheme={colorScheme}>
    <ArticleTitle colorScheme={colorScheme}>{title}</ArticleTitle>
    { headerImg && (
      <ArticleImage
        alt={generateAlt(title)}
        src={headerImg}
      />
    ) }
    <P
      justify
      color="main"
      marginBottom="small"
    >
      Lorem ipsum dolor sit amet.
    </P>
    <div className="Article__footer">
      <P size="small" color="grey">
        16:00 Apr 05, 2018.
      </P>
    </div>
  </Article>
);

ArticleComponent.defaultProps = {
  headerImg: undefined,
  colorScheme: undefined,
};

export default ArticleComponent;
