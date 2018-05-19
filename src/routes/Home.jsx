import React from 'react';
import IntroBox from 'components/IntroBox';
import Articles from 'components/Articles';

const Home = () => (
  <div className="Home">
    <div className="Home__intro">
      <IntroBox />
    </div>
    <div className="Home__main">
      <Articles />
    </div>
  </div>
);

export default Home;
