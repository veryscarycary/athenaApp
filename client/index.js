import 'babel-polyfill';

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Root from './root';

const rootElement = document.getElementById('entry');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement,
)

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root').default;

    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootElement,
    );
  });
}
