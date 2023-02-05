// API & Library
import Styled from 'styled-components';

// Asset
import logo from './assets/images/logo.png';
import Icon from './assets/images/Icon.png';

export const Styled_SidebarBackground = Styled.div<{ isActive: boolean }>`
  position: fixed;
  z-index: 9999;

  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.4rem' : '100vw')};

  transition: all 0.2s ease-in-out;
`;

export const Styled_Sidebar = Styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3rem' : '10rem')};

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease-in-out;
`;

export const Styled_SidebarLine = Styled.div`
  height: 0.3rem;
  width: calc(100% - 1px);

  background-color: var(--color-main);
`;

export const Styled_SidebarBlank = Styled.div`
  height: 1rem;
  width: 100%;

  flex-grow: 1;

  background-color: var(--color-main);
`;

export const Styled_Icon = Styled.div`
  height: 1.5rem;
  width: 1.5rem;

  background-image: url(${Icon});
  background-repeat: no-repeat;
  background-size: cover;
`;
