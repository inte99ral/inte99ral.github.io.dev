// API & Library
import React, { ReactNode } from 'react';

// Styles
import {
  styleType,
  StyledSideBarItemFrame,
  StyledSideBarItemFrameLeft,
  StyledSideBarItemFrameLeftLine,
  StyledSideBarItemFrameRight,
  StyledSideBarItemFrameRightLine,
} from './style';

// Init
interface propsType extends styleType {
  children?: ReactNode;
}

export const SideBarItemFrame = ({ isActive }: propsType) => {
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
