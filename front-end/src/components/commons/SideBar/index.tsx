// API & Library
import React, { useState } from 'react';

// Styles
import { StyledSideBarBackground, StyledSideBar } from './style';

export const SideBar = () => {
  // Init
  const [isActive, setIsActive] = useState(false);

  // Return
  return (
    <StyledSideBarBackground isActive={isActive} className="side-bar">
      <StyledSideBar
        isActive={isActive}
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="side-bar-item-container"
      >
        사이드바
      </StyledSideBar>
    </StyledSideBarBackground>
  );
};
