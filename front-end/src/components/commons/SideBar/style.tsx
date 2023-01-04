// API & Library
import Styled from 'styled-components';

// Asset
import character from 'assets/images/character.png';

export const Styled_SidebarBackground = Styled.div<{ isActive: boolean }>`
  position: fixed;

  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.6rem' : '100vw')};

  transition: all 0.2s ease-in-out;
`;

export const Styled_Sidebar = Styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.2rem' : '10.2rem')};

  display: flex;
  flex-direction: column;

  background-color: white;
  transition: all 0.2s ease-in-out;
`;

export const Styled_SidebarLine = Styled.div`
  height: 1rem;
  width: 100%;

  background-color: gray;
`;

export const Styled_SidebarBlank = Styled.div`
  height: 1rem;
  width: 100%;

  flex-grow: 1;

  background-color: green;
`;
