//>> API & Library
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

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

  //>> Hooks
  useEffect(() => {
    console.log('[VERSION]: ', process.env.REACT_APP_VERSION);
  }, []);

  //>> Return
  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
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
