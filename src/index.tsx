import * as React from 'react';
import { render } from 'react-dom';

import { GlobalStyle } from './styled';
import { Home } from './components/Home';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
