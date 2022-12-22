// API & Library
import styled from 'styled-components';

export interface styleType {
  isActive?: boolean;
}

export const StyledSideBarItemFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
`;

export const StyledSideBarItemFrameLeft = styled.div`
  position: relative;
  height: 3.2rem;
  width: 1.6rem;

  overflow: hidden;
`;

export const StyledSideBarItemFrameLeftLine = styled.div`
  position: absolute;
  top: -1.4rem;
  left: -1.4rem;
  height: 2.8rem;
  width: 2.8rem;
  border-radius: 50%;
  border: 1.6rem solid #ffffff;
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
