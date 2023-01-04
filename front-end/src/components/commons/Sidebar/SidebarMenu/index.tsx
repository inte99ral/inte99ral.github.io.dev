// API & Library
import React, { ReactNode } from 'react';

// Styled
import { styleType, Styled_SidebarMenu, Styled_SidebarMenuItem } from './style';

// Type
interface propsType extends styleType {
  children: ReactNode;
}

export const SidebarMenu = ({ children, isActive }: propsType) => {
  return (
    <Styled_SidebarMenu className="sidebar-menu" isActive={isActive}>
      <Styled_SidebarMenuItem className="sidebar-profile-item">{children}</Styled_SidebarMenuItem>
    </Styled_SidebarMenu>
  );
};
