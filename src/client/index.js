import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoot from './AppRoot';

hydrate(
  <BrowserRouter>
    <AppRoot />
  </BrowserRouter>,
  document.getElementById('root')
);
