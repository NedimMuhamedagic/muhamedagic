import styled from 'styled-components';
import {
  FONT_SIZE, PADDING, MARGIN, FONT, TRANSITION,
  HEADING,
} from 'styled';

const Me = styled.div`
  margin-bottom: ${PADDING.MAIN};
`;

const IntroImg = styled.img`
  max-width: 70%;
  border-radius: 50%;
`;

const IntroHeading = styled.h1`
  margin-bottom: ${MARGIN.XSMALL};
  font-weight: 900;
  font-size: ${FONT_SIZE.EXTRA};
`;

const IntroSubHeading = styled.h2`
  font-family: ${FONT.SANS_SERIF};
  font-size: ${HEADING.h2};
  margin-bottom: ${MARGIN.XSMALL};
`;

export {
  Me, IntroImg, IntroHeading, IntroSubHeading,
};


// .IntroBox {
//   &__me {
//     margin-bottom: $mainPadding;
//     img {
//     }
//   }
//   &__heading {
//     @extend %extra;
//     margin-bottom: $xSmallMargin;
//   }
//   &__subheading {
//     margin-bottom: $mainPadding;
//   }
//
//   h4 {
//     margin-bottom: $smallMargin;
//   }
//
//   ul {
//     li {
//       color: $accent;
//       margin-bottom: $xSmallMargin;
//     }
//   }
// }
