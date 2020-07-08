import './index.scss';
import 'regenerator-runtime/runtime';
import 'core-js/stable';
import * as React from 'react';
import { render } from 'react-dom';
import Routes from './routes';

window.React = React;
render(
  <Routes />, document.getElementById('react-container'),
);
