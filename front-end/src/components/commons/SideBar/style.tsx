import styled from 'styled-components';

export interface styleType {
  isActive: boolean;
}

export const StyledSideBarBackground = styled.div<{ isActive: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '100px' : '100vw')};
  transition: all 0.2s ease-out;

  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-blend-mode: overlay;
  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.25), -4px -4px 10px -1px rgba(255, 255, 255, 0.25);
`;

export const StyledSideBar = styled.div<{ isActive: boolean }>`
  height: 500px;
  width: ${({ isActive }) => (!isActive ? '40px' : '100px')};
  transition: all 0.2s;
  background-color: var(--theme-color);
`;
