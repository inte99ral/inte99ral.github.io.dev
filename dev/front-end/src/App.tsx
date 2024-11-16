// # src/App.tsx
// ## API & Library ==================================================

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// ## Asset ==========================================================
// ## Style ==========================================================
// ## Component ======================================================

import { BlogPage } from 'component/BlogPage';
import { ErrorPage } from 'component/ErrorPage';
import { HomePage } from 'component/HomePage';

const App = () => {
  // ## Default ========================================================
  const isDark = false;

  // ## Hook ===========================================================
  // ## Method =========================================================
  // ## Return =========================================================

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </div>
  );
};

export default App;
