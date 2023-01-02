// API & Library
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// Styles
import { Styled_SidebarBackground, Styled_Sidebar } from './style';

export const Sidebar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Styled_SidebarBackground className="sidebar-background blur outer" isActive={isActive}>
        <Styled_Sidebar
          className="sidebar"
          isActive={isActive}
          onMouseOver={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div>아이콘</div>
          <div>아이콘</div>
          <div>아이콘</div>
        </Styled_Sidebar>
      </Styled_SidebarBackground>
    </>
  );
};
