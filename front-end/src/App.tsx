// -- API & Library
import React, { useEffect, useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { scroll, isDark } from 'api/recoil/store';

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
  const app = useRef<HTMLDivElement>(null);
  const [getScroll, setScroll] = useRecoilState(scroll);
  const [getIsDark, setIsDark] = useRecoilState(isDark);

  // -- Methods
  const handleScroll = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    setScroll(app.current ? app.current.scrollTop : 0);
  };

  // -- Hooks
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
    setIsDark(localStorage.getItem('isDark') == '1');
    app.current?.addEventListener('scroll', handleScroll, true);
    return () => app.current?.removeEventListener('scroll', handleScroll, true);
  }, []);

  useEffect(() => {
    if (app.current) app.current.scrollTop = getScroll;
  }, [getScroll]);

  // -- Return
  return (
    <div className={`app ${getIsDark ? 'dark' : 'light'}`} ref={app}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/profile" />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
