// @flow
import React from 'react';
import { Home, Intro, Main } from 'styled/Home';
import IntroBox from 'components/IntroBox';
import Articles from 'components/Articles';

const HomeRoute = (): React$Element<typeof Home> => (
  <Home>
    <Intro>
      <IntroBox />
    </Intro>
    <Main>
      <Articles />
    </Main>
  </Home>
);

export default HomeRoute;
