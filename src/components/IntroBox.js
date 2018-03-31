import React from 'react';
import { HOME } from 'strings';

const IntroBox = () => (
  <div className="IntroBox">
    <h1 className="IntroBox__heading">
      { HOME.heading }
    </h1>
    <h2 className="IntroBox__subheading">
      { HOME.subheading }
    </h2>
  </div>
);

export default IntroBox;
