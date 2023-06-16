// -- API & Library
import React, { useEffect, useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import { appState, isDarkState, isSmoothState } from 'api/recoil/store';

// -- Styles
import './theme.scss';

// -- Components
import { Sidebar } from 'components/Sidebar';
import { Footer } from 'components/Footer';

import { ProfilePage } from 'components/ProfilePage';
import { HomePage } from 'components/HomePage';
import { BlogPage } from 'components/BlogPage';
import { ErrorPage } from 'components/ErrorPage';

const App = () => {
  // -- Init
  const [app, setApp] = useRecoilState(appState);
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const [isSmooth, setIsSmooth] = useRecoilState(isSmoothState);

  // -- Hooks
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
    // setApp(document.getElementById('app0') as HTMLDivElement);
    // setApp(document.getElementById('app') as HTMLDivElement);
    // setApp(document.getElementById('app2') as HTMLDivElement);
    // setIsSmooth(true);
    // setIsSmooth(false);
    // setIsSmooth(true);
    setIsDark(localStorage.getItem('isDark') == '1');
    return;
  }, []);

  // -- Return
  return (
    <div id="app" className={`app ${isDark ? 'dark' : 'light'} ${isSmooth ? 'smooth' : ''}`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/profile" />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
