// # src/App.tsx
// ## API & Library ==================================================

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// ## Asset ==========================================================
// ## Style ==========================================================
// ## Component ======================================================

import { PortfolioPage } from 'component/PortfolioPage';

const App = () => {
  // ## Default ========================================================
  const isDark = false;

  // ## Hook ===========================================================
  // ## Method =========================================================
  // ## Return =========================================================

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="/portfolio/*" element={<PortfolioPage />} />
        <Route path="/*" element={<Navigate replace to="/portfolio" />} />
      </Routes>
    </div>
  );
};

export default App;
