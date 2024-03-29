// -- API & Library
import React, { useEffect, useRef, MutableRefObject } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { appState, isDarkState } from 'api/recoil/store';

// -- Styles
import './theme.scss';

// -- Components
import { Sidebar } from 'components/Sidebar';
import { Footer } from 'components/Footer';

import { PortfolioPage } from 'components/PortfolioPage';
import { ProfilePage } from 'components/ProfilePage';
import { HomePage } from 'components/HomePage';
import { BlogPage } from 'components/BlogPage';
import { ErrorPage } from 'components/ErrorPage';

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
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/profolio" />} />
        <Route path="/profolio/*" element={<PortfolioPage />} />
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
