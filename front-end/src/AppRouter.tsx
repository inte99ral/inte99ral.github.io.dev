// API & Library
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Components
import { SideBar } from 'components/commons/SideBar';
import { HomePage } from 'components/pages/HomePage';
import { BlogPage } from 'components/pages/BlogPage';
import { ErrorPage } from 'components/pages/ErrorPage';

export const AppRouter = () => {
  // Return
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/blog/*" element={<BlogPage />} />
          <Route path="/error/*" element={<ErrorPage />} />
          <Route path="/*" element={<Navigate replace to="/error" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
