import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './App';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
