// API & Library
import Styled from 'styled-components';

// Asset
import character from 'assets/images/character.png';

export const Styled_SidebarBackground = Styled.div<{ isActive: boolean }>`
  position: fixed;

  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.2rem' : '100vw')};

  transition: all 0.2s ease-in-out;
`;

export const Styled_Sidebar = Styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3rem' : '14.4rem')};

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease-in-out;
`;

export const Styled_SidebarLine = Styled.div`
  height: 0.3rem;
  width: 100%;

  background-color: #d4d4d4;
`;

export const Styled_SidebarBlank = Styled.div`
  height: 1rem;
  width: 100%;

  flex-grow: 1;

  background-color: white;
`;
