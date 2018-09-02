// @flow
import React from 'react';
import styled from 'styled-components';
// TODO: [@nmuhamedagic]: Add a proper router
import Home from 'routes/Home';
import { COLORS } from 'styled';

const MainApp = styled.div`
  background: ${COLORS.WHITE_VINTAGE};
  img {
    max-width: 100%;
  }
`;

const App = (): React$Element<typeof MainApp> => (
  <MainApp>
    <Home />
  </MainApp>
);

export default App;
