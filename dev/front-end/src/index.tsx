import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme.css';
import App from './App';
import { reportWebVitals } from 'api/webVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals(console.log);
