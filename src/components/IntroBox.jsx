// @flow
import React from 'react';
import { HOME } from 'strings';
import {
  Me, IntroImg, IntroHeading, IntroSubHeading,
} from 'styled/introbox';

import nmImg from 'assets/images/nedimmuhamedagic.jpg';

const IntroBox = (): React$Element<typeof React.Fragment> => (
  <React.Fragment>
    <Me>
      <IntroImg
        alt={HOME.heading}
        src={nmImg}
      />
    </Me>
    <IntroHeading>
      { HOME.heading }
    </IntroHeading>
    <IntroSubHeading>
      { HOME.subheading }
      <span className="colorMain">
        {' '}
        { HOME.subheadingAccent }
      </span>
    </IntroSubHeading>
    <h4>What do I actually do</h4>
    <ul>
      {
        HOME.skills.map((skill: string): React$Element<'li'> => <li key={skill}>{ skill }</li>)
      }
    </ul>
  </React.Fragment>
);

export default IntroBox;
