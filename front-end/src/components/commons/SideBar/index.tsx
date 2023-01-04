// API & Library
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

// Styles
import {
  Styled_SidebarBackground,
  Styled_Sidebar,
  Styled_SidebarLine,
  Styled_SidebarBlank,
} from './style';

// Components
import { SidebarProfile } from './SidebarProfile';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  return (
    <Styled_SidebarBackground className="sidebar-background blur outer" isActive={isActive}>
      <Styled_Sidebar
        className="sidebar outer"
        isActive={isActive}
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <SidebarProfile isActive={isActive}>sd</SidebarProfile>
        <Styled_SidebarLine className="sidebar-line inner"></Styled_SidebarLine>
        <SidebarMenu isActive={isActive}>sd</SidebarMenu>
        <div>아이콘</div>
        <div>아이콘</div>
        <div>아이콘</div>
        <Styled_SidebarBlank></Styled_SidebarBlank>
      </Styled_Sidebar>
    </Styled_SidebarBackground>
  );
};
