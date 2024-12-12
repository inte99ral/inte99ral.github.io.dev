// # src/App.tsx
// ## API & Library ==================================================

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// ## Asset ==========================================================
// ## Style ==========================================================
// ## Component ======================================================

// import { Home } from 'component/Home';
// import { Error } from 'component/Error';
// import { Blog } from 'component/Blog';
import { Example } from 'component/_EXAMPLE_';
// import { PortfolioPage } from 'component/PortfolioPage';

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
        <Route path="/home/*" element={<Example />} />
        {/* <Route path="/blog/*" element={<Blog />} />
      <Route path="/error/*" element={<Error />} /> */}
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </div>
  );
};

export default App;
