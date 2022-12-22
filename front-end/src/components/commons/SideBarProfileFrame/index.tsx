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

export const SideBarProfileFrame = () => {
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
