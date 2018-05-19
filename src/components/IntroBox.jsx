import React from 'react';
import { HOME } from 'strings';

import nmImg from 'assets/images/nedimmuhamedagic.jpg';

const IntroBox = () => (
  <div className="IntroBox">
    <div className="IntroBox__me">
      <img
        alt={ HOME.heading }
        src={ nmImg } />
    </div>
    <h1 className="IntroBox__heading">
      { HOME.heading }
    </h1>
    <h2 className="IntroBox__subheading">
      { HOME.subheading }<span className="colorMain"> { HOME.subheadingAccent }</span>
    </h2>
    <h4>What do I actually do</h4>
    <ul>
      {
        HOME.skills.map( skill => <li key={ skill }>{ skill }</li>)
      }
    </ul>
  </div>
);

export default IntroBox;
