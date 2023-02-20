// -- API & Library
import React from 'react';

// -- Styles
import {
  Styled_SidebarMenuFrame,
  Styled_SidebarMenuFrameLeft,
  Styled_SidebarMenuFrameMiddle,
  Styled_SidebarMenuFrameRight,
} from './style';

export const SidebarMenuFrame = () => {
  // -- Return
  return (
    <Styled_SidebarMenuFrame className="sidebar-menu-frame">
      <Styled_SidebarMenuFrameLeft className="sidebar-menu-frame-left" />
      <Styled_SidebarMenuFrameMiddle className="sidebar-menu-frame-middle" />
      <Styled_SidebarMenuFrameRight className="sidebar-menu-frame-right" />
    </Styled_SidebarMenuFrame>
  );
};
