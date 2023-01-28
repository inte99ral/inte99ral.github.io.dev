// API & Library
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import { Sidebar } from 'components/Sidebar';
import { ProfilePage } from 'components/ProfilePage';
import { HomePage } from 'components/HomePage';
import { BlogPage } from 'components/BlogPage';
import { ErrorPage } from 'components/ErrorPage';

export const AppRouter = () => {
  // Return
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/profile/*" element={<ProfilePage />} />
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/blog/*" element={<BlogPage />} />
        <Route path="/error/*" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate replace to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
};
