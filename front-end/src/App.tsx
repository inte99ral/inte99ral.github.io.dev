// API & Library
import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';

// Styles
import './theme.scss';

// Components
import { AppRouter } from 'AppRouter';

function App() {
  // Init
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark'));

  // LifeCycle
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
  }, []);

  // Return
  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </div>
  );
}

export default App;
