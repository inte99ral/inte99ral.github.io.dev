// # src/index.tsx
// ## API & Library ==================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { reportWebVitals } from 'api/webVitals';

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
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </React.StrictMode>,
);

// reportWebVitals(console.log);
