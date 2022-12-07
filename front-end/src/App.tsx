// API & Library
import React, { useState, useEffect } from 'react';

// Styles
import './theme.scss';

// Components
import { SideBar } from 'components/commons/SideBar';
import { AppRouter } from 'AppRouter';

function App() {
  // Init
  const [isDark, setIsDark] = useState(false);

  // LifeCycle
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
  }, []);

  // Return
  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <SideBar />
      <AppRouter />
    </div>
  );
}

export default App;
