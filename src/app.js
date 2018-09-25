/* global document: true */
/* eslint no-undef: "error" */

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/component/backgroundImage.jpg';
import './styles/styles.scss';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root'),
);
