// API & Library
import React, { useState } from 'react';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';

// Styles
import {
  Styled_SidebarBackground,
  Styled_Sidebar,
  Styled_SidebarLine,
  Styled_SidebarBlank,
} from './style';

// Components
import { SidebarMenu } from './SidebarMenu';

export const Sidebar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  // Return
  return (
    <Styled_SidebarBackground className="sidebar-background blur outer" isActive={isActive}>
      <Styled_Sidebar
        className="sidebar outer"
        isActive={isActive}
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <SidebarMenu link="/home" icon={<div>2</div>} title="Come On Max" />

        <Styled_SidebarLine className="sidebar-line inner" />

        <SidebarMenu link="/blog" icon={<AiFillHome />} title="홈페이지" />
        <SidebarMenu link="/blog" icon={<AiFillGithub />} title="Come On Max" />
        <SidebarMenu link="/error" icon={<AiFillGithub />} title="Oriental Hold'em" />

        <Styled_SidebarBlank></Styled_SidebarBlank>
      </Styled_Sidebar>
    </Styled_SidebarBackground>
  );
};
