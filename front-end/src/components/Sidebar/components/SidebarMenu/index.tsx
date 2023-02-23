// -- API & Library
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

// -- Styles
import { Styled_SidebarMenu, Styled_SidebarMenuIcon, Styled_SidebarMenuTitle } from './style';

// -- Components
import { SidebarMenuFrame } from './components/SidebarMenuFrame';

// -- Interfaces & Types
interface props {
  link: string;
  icon: ReactElement;
  title: ReactElement;
}

export const SidebarMenu = ({ link, icon, title }: props) => {
  // -- Return
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? 'active' : '')}
      style={({ isActive }) => ({ background: isActive ? 'none' : 'var(--color-main)' })}
    >
      <Styled_SidebarMenu className="sidebar-menu">
        <SidebarMenuFrame />
        <Styled_SidebarMenuIcon className="sidebar-menu-icon">{icon}</Styled_SidebarMenuIcon>
        <Styled_SidebarMenuTitle className="sidebar-menu-title">{title}</Styled_SidebarMenuTitle>
      </Styled_SidebarMenu>
    </NavLink>
  );
};
