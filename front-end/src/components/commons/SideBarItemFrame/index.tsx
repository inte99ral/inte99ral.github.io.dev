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

export const SideBarItemFrame = ({ isActive, widthActive, widthInactive }: propsType) => {
  return (
    <StyledSideBarItemFrame>
      <StyledSideBarItemFrameLeft
        isActive={isActive}
        widthActive={widthActive}
        widthInactive={widthInactive}
      >
        <StyledSideBarItemFrameLeftLine />
      </StyledSideBarItemFrameLeft>
    </StyledSideBarItemFrame>
  );
};
