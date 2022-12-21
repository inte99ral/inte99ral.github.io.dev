// API & Library
import React from 'react';

// Styles
import {
  StyledSideBarItemFrame,
  StyledSideBarItemFrameLeft,
  StyledSideBarItemFrameLeftLine,
  StyledSideBarItemFrameRight,
  StyledSideBarItemFrameRightLine,
} from './style';

export const SideBarItemFrame = () => {
  return (
    <StyledSideBarItemFrame>
      <StyledSideBarItemFrameLeft>
        <StyledSideBarItemFrameLeftLine />
      </StyledSideBarItemFrameLeft>
      <StyledSideBarItemFrameRight>
        <StyledSideBarItemFrameRightLine />
      </StyledSideBarItemFrameRight>
    </StyledSideBarItemFrame>
  );
};
