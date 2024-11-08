// -- API & Library
import React, { useEffect, useRef, MutableRefObject } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { appState, isDarkState } from 'api/recoil/store';

// -- Styles
import './theme.scss';

// -- Components
import { Sidebar } from 'components/Sidebar';

import { PortfolioPage } from 'components/PortfolioPage';
import { ProfilePage } from 'components/ProfilePage';
import { ErrorPage } from 'components/ErrorPage';
import { PrivacyPage } from 'components/PrivacyPage';

const App = () => {
  // -- Init
  const appRef = useRef() as MutableRefObject<HTMLDivElement>;

  const setApp = useSetRecoilState(appState);
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  // -- Hooks
  useEffect(() => {
    setIsDark(localStorage.getItem('isDark') == '1');
    return;
  }, []);

  useEffect(() => {
    setApp(appRef.current);
  }, [appRef]);

  // -- Return
  return (
    <div ref={appRef} id="app" className={`app ${isDark ? 'dark' : 'light'}`}>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Navigate replace to="/portfolio" />} />
        <Route path="/portfolio/*" element={<PortfolioPage />} />
        {/* <Route path="/home/*" element={<ProfilePage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/privacy/*" element={<PrivacyPage />} /> */}
        <Route path="/*" element={<Navigate replace to="/portfolio" />} />
      </Routes>
    </div>
  );
};

export default App;
