// # src/App.tsx

// ## Documentation ==========================================================
/** */

// ## Import Declaration =====================================================

// ### API & Library:

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// ### Component:

import { Home } from 'component/Home';

// ## Component ==============================================================

// ### App
function App() {
  // #### Variable:

  const isDark = false;

  // #### Return:

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </div>
  );
}

export default App;
