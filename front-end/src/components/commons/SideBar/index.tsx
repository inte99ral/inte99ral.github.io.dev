// API & Library
import React, { useState } from 'react';
import { AiFillHome, AiFillGithub, AiFillFolder } from 'react-icons/ai';
import { BsPersonCircle, BsFillPersonFill } from 'react-icons/bs';

// Styles
import {
  Styled_SidebarBackground,
  Styled_Sidebar,
  Styled_SidebarLine,
  Styled_SidebarBlank,
  Styled_Icon,
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
        <SidebarMenu link="/profile" icon={<Styled_Icon />} title={<div>INTEGRAL</div>} />

        <Styled_SidebarLine className="sidebar-line inner" />

        <SidebarMenu link="/home" icon={<AiFillHome />} title={<div>Home</div>} />
        <SidebarMenu link="/blog" icon={<BsFillPersonFill />} title={<div>Blog</div>} />
        <SidebarMenu link="/project" icon={<AiFillFolder />} title={<div>Project</div>} />
        <SidebarMenu link="/error" icon={<AiFillGithub />} title={<div>Come On Max</div>} />

        <Styled_SidebarBlank></Styled_SidebarBlank>
      </Styled_Sidebar>
    </Styled_SidebarBackground>
  );
};
