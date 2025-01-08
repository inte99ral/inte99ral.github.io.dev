// # src/component/_EXAMPLE_/style.tsx

// ## Import Declaration =====================================================

// ### API & Library:
import Styled from 'styled-components';

// ### Assets:
import Icon from './asset/Icon.png';

// ## Style ==================================================================
export const Styled_Sidebar = Styled.div`
  width: 3rem;
  height: 100vh;
  padding-top: 1rem;
  overflow: visible;
  z-index: 200;
`;

export const Styled_SidebarBackground = Styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (!isActive ? '3.25rem' : '100vw')};
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  z-index: 201;
`;

export const Styled_SidebarCover = Styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (!isActive ? '3rem' : '30vw')};
  height: 100vh;
  background-color: white;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 202;

  & div:nth-child(1) {
    position: absolute;
    top: 1rem;
    left: 0;

    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
    border-radius: 50%;

    background-color: gray;
  }

  & div:nth-child(2) {
    position: absolute;
    top: 4rem;
    left: 0;

    height: 3rem;
    width: 3rem;
    padding: 0.5rem;
    border-radius: 50%;

    background-color: gray;
  }
`;

export const Styled_SidebarButtonContainer = Styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (!isActive ? '3rem' : '30vw')};
  
  display: flex;
  flex-direction: column;

  z-index: 203;
`;

export const Styled_SidebarButton = Styled.div<{ isActive: boolean; length: number }>`

  & a {
    height: 2rem;
    left: 0;
    right: 0;
    margin: 0.5rem;
    overflow: hidden;
    
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
    
    background-color: green;

    & .sidebar-button-tag {
      height: ${({ isActive, length }) => (!isActive && length > 1 ? '1rem' : '2rem')};
      width: ${({ isActive, length }) => (!isActive && length > 1 ? '1rem' : '2rem')};
      border-radius: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: magenta;

      & .sidebar-button-tag-icon {
      font-size: ${({ isActive, length }) => (!isActive && length > 1 ? '0.8rem' : '1.6rem')};
      }

      & .sidebar-button-tag-icon * {
        font-size: ${({ isActive, length }) => (!isActive && length > 1 ? '0.6rem' : '1.2rem')};
      }
    }
  }
`;

export const Styled_SidebarIcon = Styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (!isActive ? '1rem' : '2rem')};
  width: ${({ isActive }) => (!isActive ? '1rem' : '2rem')};

  border-radius: 50%;

  background-color: black;
`;

export const Styled_Icon = Styled.div`
  height: 1.5rem;
  width: 1.5rem;

  background-image: url(${Icon});
  background-repeat: no-repeat;
  background-size: cover;
`;
