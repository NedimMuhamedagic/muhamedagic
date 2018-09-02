// @flow
import styled from 'styled-components';
import { PADDING, FLEX } from 'styled';

const Home = styled.div`
  ${FLEX.ROW};
  height: 100vh;
`;

const Intro = styled.div`
  ${FLEX.COLUMN};
  align-items: flex-start;
  justify-content: flex-end;
  padding: ${PADDING.MAIN_DOUBLE}
  width: 25%;
`;

const Main = styled.div`
  width: 75%;
`;

export { Home, Intro, Main };
