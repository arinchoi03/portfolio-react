import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Portfolio />,
  document.getElementById('root')
);

registerServiceWorker();
