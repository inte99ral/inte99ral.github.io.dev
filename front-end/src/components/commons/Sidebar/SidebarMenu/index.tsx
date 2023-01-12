// API & Library
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import { Styled_SidebarMenu, Styled_SidebarMenuIcon, Styled_SidebarMenuTitle } from './style';

// Components
import { SidebarMenuFrame } from './SidebarMenuFrame';

// Type
interface propsType {
  link: string;
  icon: ReactElement;
  title: string;
}

export const SidebarMenu = ({ link, icon, title }: propsType) => {
  // Return
  return (
    <NavLink to={link} style={({ isActive }) => ({ background: isActive ? 'none' : '#ffffff' })}>
      <Styled_SidebarMenu className="sidebar-menu">
        <SidebarMenuFrame />

        <Styled_SidebarMenuIcon className="sidebar-menu-icon">{icon}</Styled_SidebarMenuIcon>
        <Styled_SidebarMenuTitle className="sidebar-menu-title">{title}</Styled_SidebarMenuTitle>
      </Styled_SidebarMenu>
    </NavLink>
  );
};
