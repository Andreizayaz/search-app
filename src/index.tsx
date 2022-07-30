import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
