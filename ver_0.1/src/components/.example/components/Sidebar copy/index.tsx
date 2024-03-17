// -- API & Library
import React, { MouseEvent, useState } from 'react';
import { AiFillHome, AiFillGithub, AiFillFolder, AiFillSetting } from 'react-icons/ai';
import { BsPersonCircle, BsFillPersonFill } from 'react-icons/bs';

// -- Style
import {
  Styled_SidebarBackground,
  Styled_Sidebar,
  Styled_SidebarLine,
  Styled_SidebarBlank,
  Styled_Icon,
} from './style';

// -- Component
import { SidebarMenu } from './components/SidebarMenu';
import { SidebarOption } from './components/SidebarOption';

export const Sidebar = () => {
  // -- Init
  const [isActive, setIsActive] = useState(false);

  // -- Method
  const closeSidebar = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(false);
  };

  const openSidebar = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(true);
  };

  // -- Return
  return (
    <Styled_SidebarBackground
      className="sidebar-background blur outer"
      isActive={isActive}
      onMouseOver={closeSidebar}
    >
      <Styled_Sidebar className="sidebar" isActive={isActive} onMouseOver={openSidebar}>
        <SidebarMenu link="/profile" icon={<Styled_Icon />} title={<div>INTEGRAL</div>} />

        <Styled_SidebarLine className="sidebar-line inner" />

        <SidebarMenu link="/home" icon={<AiFillHome />} title={<div>Home</div>} />
        <SidebarMenu link="/blog" icon={<BsFillPersonFill />} title={<div>Blog</div>} />
        <SidebarMenu link="/project" icon={<AiFillFolder />} title={<div>Project</div>} />
        <SidebarMenu link="/error" icon={<AiFillGithub />} title={<div>Come On Max</div>} />

        <Styled_SidebarBlank />

        <SidebarOption icon={<AiFillSetting />} title={<div>Settings</div>} />
      </Styled_Sidebar>
    </Styled_SidebarBackground>
  );
};
