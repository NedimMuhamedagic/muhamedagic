// @flow
import styled from 'styled-components';

type DefaultTextProps = {
  justify: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit',
  color?: string,
  size?: string,
  marginBottom?: 'xsmall' | 'small' | 'main' | 'none'
};

const FONT_SIZE = {
  EXTRA: '3rem',
  DEFAULT: '1rem',
  SMALL: '0.8rem',
  BODY: '0.9rem',
};

const FONT = {
  SANS_SERIF: "'Raleway', sans-serif",
  SERIF: "'Merriweather', serif",
};

const HEADING = {
  h1: '2rem',
  h2: '1.8rem',
  h3: '1.6rem',
  h3lh: '2rem',
  h4: '1.4rem',
  h5: '1.2rem',
};

const PADDING = {
  MAIN: '1.2rem',
  MAIN_DOUBLE: '2.4rem',
  ALT: '0.725rem',
};

const MARGIN = {
  MAIN: '1rem',
  SMALL: '0.5rem',
  XSMALL: '0.435rem',
};

const TRANSITION = {
  MAIN: 'all .3s ease',
};

const COMMON = {
  HOVER_OPACITY: 0.7,
};

const FLEX = {
  COLUMN: `
    display: flex;
    flex-direction: column;
  `,
  ROW: `
    display: flex;
    flex-direction: row;
  `,
};

const COLORS = {
  WHITE_VINTAGE: '#FEFBF7',
  MAIN: '#801CA2',
  MAIN_LIGHT: '#D62EB2',
  ALT: '#EA1C31',
  ALT_LIGHT: '#FFD508',
  ACCENT: '#50B0A6',
  GREY: '#888888',
};

const F = styled.p`
  font-family: ${FONT.SANS_SERIF};
  font-size: ${FONT_SIZE.BODY};
`;

const PColors = {
  grey: COLORS.GREY,
  default: COLORS.MAIN,
};

const PSizes = {
  small: FONT_SIZE.SMALL,
  body: FONT_SIZE.BODY,
  default: FONT_SIZE.DEFAULT,
  extra: FONT_SIZE.EXTRA,
};

const PMargins = {
  xsmall: MARGIN.XSMALL,
  small: MARGIN.SMALL,
  main: MARGIN.MAIN,
  none: '0',
};

const P = styled.p`
  font-family: ${FONT.SERIF};
  line-height: 1.2;
  letter-spacing: 0.5px;
  font-size: ${FONT_SIZE.BODY};
  text-align: ${(props: DefaultTextProps): string => props.justify};
  color: ${(props: DefaultTextProps): string => PColors[props.color || 'default']};
  font-size: ${(props: DefaultTextProps): string => PSizes[props.size || 'default']};
  transition: ${TRANSITION.MAIN};
  margin-bottom: ${(props: DefaultTextProps): string => PMargins[props.marginBottom || 'none']}
}
`;

const Title = styled.h1`
  font-family: ${FONT.SANS_SERIF};
  font-size: ${HEADING.h1};
`;

const Subheading = styled.h1`
  font-family: ${FONT.SANS_SERIF};
  font-size: ${HEADING.h2};
`;

export {
  COLORS,
  FONT,
  FONT_SIZE,
  HEADING,
  PADDING,
  MARGIN,
  TRANSITION,
  COMMON,
  FLEX,
  F,
  Title,
  Subheading,
};
export default P;
