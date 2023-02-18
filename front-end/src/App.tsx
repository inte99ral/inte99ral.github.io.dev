//>> API & Library
import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { scroll } from 'api/recoil/store';

//>> Styles
import './theme.scss';

//>> Components
import { Sidebar } from 'components/Sidebar';
import { ProfilePage } from 'components/ProfilePage';
import { HomePage } from 'components/HomePage';
import { BlogPage } from 'components/BlogPage';
import { ErrorPage } from 'components/ErrorPage';

const App = () => {
  //>> Init
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark'));
  const app = useRef<HTMLDivElement>(null);
  const setScroll = useSetRecoilState(scroll);

  //>> Hooks
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
    app.current?.addEventListener(
      'scroll',
      (e) => {
        e.stopPropagation();
        console.log('클릭');
      },
      true,
    );
  }, []);

  //>> Return
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`} ref={app}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </div>
  );
};

export default App;
