// # src/index.tsx

// ## Documentation ==========================================================
/**
 *
 * ```
 * @types/react
 * @types/react-dom
 * -D npm-force-resolutions
 * eslint
 * typescript
 *
 * sass
 * react-icons
 *
 * styled-components
 * @types/styled-components
 *
 * react-router-dom
 * @types/react-router-dom
 *
 * recoil
 * axios
 *
 * react-markdown
 * github-markdown-css
 * remark-gfm
 * ```
 *
 */

// ## Import Declaration =====================================================

// ### API & Library:

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { reportWebVitals } from 'api/webVitals';

// ### Component:

import App from './App';

// ### Style:

import './theme.scss';

// ## Variable & Constant ====================================================

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// ## Function ===============================================================

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals(console.log);
