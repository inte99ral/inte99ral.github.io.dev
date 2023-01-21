// API & Library
import React, { useState } from 'react';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';

// Styles
import {
  Styled_SidebarBackground,
  Styled_Sidebar,
  Styled_SidebarLine,
  Styled_SidebarBlank,
  Styled_Logo,
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
        <SidebarMenu link="/home" icon={<Styled_Logo />} title={<div>Integral</div>} />

        <Styled_SidebarLine className="sidebar-line inner" />

        <SidebarMenu link="/home" icon={<AiFillHome />} title={<div>Come On Max</div>} />
        <SidebarMenu link="/blog" icon={<AiFillHome />} title={<div>Come On Max</div>} />
        <SidebarMenu link="/error" icon={<AiFillGithub />} title={<div>Come On Max</div>} />

        <Styled_SidebarBlank></Styled_SidebarBlank>
      </Styled_Sidebar>
    </Styled_SidebarBackground>
  );
};
