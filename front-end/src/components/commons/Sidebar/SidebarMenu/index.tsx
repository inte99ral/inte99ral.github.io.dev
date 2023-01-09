// API & Library
import React, { ReactNode, ReactElement } from 'react';

// Styled
import {
  styleType,
  Styled_SidebarMenu,
  Styled_SidebarMenuFrameLeft,
  Styled_SidebarMenuFrameRight,
  Styled_SidebarMenuItem,
  Styled_SidebarMenuIcon,
  Styled_SidebarMenuTitle,
} from './style';

// Type
interface propsType extends styleType {
  icon: ReactElement;
  title: string;
}

export const SidebarMenu = ({ isActive, icon, title }: propsType) => {
  return (
    <Styled_SidebarMenu className="sidebar-menu" isActive={isActive}>
      <Styled_SidebarMenuFrameLeft />
      <Styled_SidebarMenuFrameRight />
      <Styled_SidebarMenuItem className="sidebar-menu-item">
        <Styled_SidebarMenuIcon className="sidebar-menu-icon">{icon}</Styled_SidebarMenuIcon>
        <Styled_SidebarMenuTitle className="sidebar-menu-title">{title}</Styled_SidebarMenuTitle>
      </Styled_SidebarMenuItem>
    </Styled_SidebarMenu>
  );
};
