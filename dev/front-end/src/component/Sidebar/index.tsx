// # src/component/Sidebar/index.tsx

// ## Import Declaration =====================================================

// ### API & Library:

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';

// ### Component:

// ### Style:

import {
  Styled_Sidebar,
  Styled_SidebarBackground,
  Styled_SidebarCover,
  Styled_SidebarButton,
  Styled_SidebarButtonContainer,
  Styled_SidebarIcon,
  Styled_Icon,
} from './style';

// ## Component ==============================================================
// ### Sidebar
export const Sidebar = () => {
  // #### Variable:
  const [isActive, setIsActive] = useState(true);

  // #### Return:
  return (
    <Styled_Sidebar className="sidebar">
      <Styled_SidebarBackground className="sidebar-background outer blur" isActive={isActive} />
      <Styled_SidebarCover className="sidebar-cover" isActive={isActive}>
        <div className="sidebar-background-circle"></div>
        <div className="sidebar-background-circle"></div>
      </Styled_SidebarCover>
      <Styled_SidebarButtonContainer className="sidebar-button-container" isActive={isActive}>
        <Styled_SidebarButton className="sidebar-button" isActive={isActive} length={1}>
          <NavLink to="/error">
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">
                <AiFillHome></AiFillHome>
              </div>
            </div>
          </NavLink>
        </Styled_SidebarButton>
        <Styled_SidebarButton className="sidebar-button" isActive={isActive} length={-1}>
          <NavLink to="/error">
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">
                <AiFillHome></AiFillHome>
              </div>
              {/* <div className="sidebar-button-tag-name">enaral</div> */}
            </div>
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">G</div>
            </div>
          </NavLink>
        </Styled_SidebarButton>
        <Styled_SidebarButton className="sidebar-button" isActive={isActive} length={5}>
          <NavLink to="/error">
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">
                <AiFillHome></AiFillHome>
              </div>
            </div>
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">G</div>
            </div>
            <div className="sidebar-button-tag">
              <div className="sidebar-button-tag-icon">박</div>
            </div>
          </NavLink>
        </Styled_SidebarButton>
      </Styled_SidebarButtonContainer>
    </Styled_Sidebar>
  );
};
