// # src/index.tsx
// ## API & Library ==================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { reportWebVitals } from './api/webVitals';

// ## Asset ==========================================================

// ## Style ==========================================================

import './theme.scss';

// ## Component ======================================================

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// ## Hook ===========================================================
// ## Method =========================================================
// ## Return =========================================================

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
