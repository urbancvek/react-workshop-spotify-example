// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

const rootNode = document.getElementById('root');

ReactDOM.render(
  <App />,
  rootNode
);

if (module.hot) {
  module.hot.accept('App', () => {
    const NextApp = require('App').default;

    ReactDOM.render(
      <NextApp />,
      rootNode
    );
  });
}
