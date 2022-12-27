// API & Library
import styled from 'styled-components';

export interface styleType {
  isActive: boolean;
  widthActive: string;
  widthInactive: string;
}

export const StyledSideBarItemFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
`;

export const StyledSideBarItemFrameLeft = styled.div<styleType>`
  position: relative;
  height: ${({ isActive, widthActive, widthInactive }) => (isActive ? widthActive : widthInactive)};

  width: 1.6rem;
  width: ${({ isActive, widthActive, widthInactive }) => (isActive ? widthActive : widthInactive)};

  border: 1px solid red;

  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;

export const StyledSideBarItemFrameLeftLine = styled.div`
  position: absolute;
  top: -0;
  left: -0;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 10px solid #ffffff;
`;

export const StyledSideBarItemFrameRight = styled.div`
  position: relative;
  height: 3.2rem;
  flex-grow: 1;

  overflow: hidden;
`;

export const StyledSideBarItemFrameRightLine = styled.div`
  position: absolute;
  top: -1.4rem;
  left: -1.6rem;

  height: 2.8rem;
  width: 100%;
  border: 1.6rem solid #ffffff;
`;
