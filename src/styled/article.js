// @flow
import styled from 'styled-components';
import {
  COLORS, PADDING, MARGIN, COMMON, TRANSITION,
  HEADING,
} from 'styled';

const colors = {
  purple: COLORS.MAIN,
  red: COLORS.ALT,
  turquoise: COLORS.ACCENT,
  default: COLORS.MAIN_LIGHT,
};

type ArticleProps = {
  colorScheme: string
};

const Article = styled.div`
  padding: 0 ${PADDING.MAIN};
  margin-bottom: ${MARGIN.MAIN};
  max-width: 40rem;
  width: 100%;
  &:hover {
    cursor: pointer;
    h1 {
      color: ${(props: ArticleProps): string => colors[props.colorScheme]};
    }
  }
`;

const ArticleTitle = styled.h1`
  font-size: ${HEADING.h3};
  line-height: ${HEADING.h3lh};
  margin-bottom: ${PADDING.MAIN};
  transition: ${TRANSITION.MAIN};
  width: 100%;
  padding-top: ${PADDING.MAIN};
  font-weight: 900;
  border-top: 2px solid ${(props: ArticleProps): string => colors[props.colorScheme]};
`;

const ArticleImage = styled.img`
  display: block;
  margin: 0 0 ${MARGIN.MAIN} 0;
  padding: 0;
  transition: ${TRANSITION.MAIN};
  ${Article}:hover & {
    opacity: ${COMMON.HOVER_OPACITY};
  }
`;

export { Article, ArticleImage, ArticleTitle };


//
// @function variable_lookup($color) {
//   @return map-get($colors, unquote($color));
// }
//
// @mixin customizeArticleColor($color) {
//   $this: &;
//   &.#{$color} {
//     #{$this}__image {
//       background: variable-lookup($color);
//     }
//
//     h1 {
//       border-top: 2px solid variable-lookup($color);
//     }
//
//     &:hover {
//       h1 {
//         color: variable-lookup($color);
//       }
//       img {
//         opacity: $hoverOpacity;
//       }
//
//       p {
//         color: lighten(variable-lookup($color), 20%);
//       }
//
//       span {
//         color: $grey;
//       }
//     }
//   }
// }
//

//
// .Article {
//   @include customizeArticleColor('purple');
//   @include customizeArticleColor('red');
//   @include customizeArticleColor('turquoise');
//   @include customizeArticleColor('default');
//
//   padding: 0 $mainPadding;
//   margin-bottom: $mainMargin;
//   max-width: 40rem;
//   width: 100%;
//
//   &:hover {
//     cursor: pointer;
//   }
//
//   h1 {

//   }
//
//   &__image {
//     margin-bottom: $mainMargin;
//     img {

//     }
//   }
//
//   p {
//     color: $grey;
//     margin-bottom: $smallMargin;
//     transition: $mainTransition;
//   }
//
//   &__footer {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding-bottom: $mainPadding;
//     &--item {
//       font-size: $fontSmall;
//       transition: $mainTransition;
//     }
//   }
// }
