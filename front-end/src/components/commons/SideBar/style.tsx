// API & Library
import styled from 'styled-components';

// Asset
import character from 'asset/image/character.png';

export interface styleType {
  isActive: boolean;
}

export const StyledSideBarBackground = styled.div<{ isActive: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.6rem' : '100vw')};
  transition: all 0.2s ease-in-out;

  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-blend-mode: overlay;
  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.25), -4px -4px 10px -1px rgba(255, 255, 255, 0.25);
`;

export const StyledSideBar = styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.2rem' : '12rem')};

  overflow: hidden;

  transition: all 0.2s ease-in-out;
  background-color: #ffffff;
  box-shadow: 4px 4px 10px -1px rgba(0, 0, 0, 0.25), -4px -4px 10px -1px rgba(255, 255, 255, 0.25);
`;

export const StyledSideBarProfile = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (!isActive ? '2.4rem' : '11.2rem')};
  width: ${({ isActive }) => (!isActive ? '2.4rem' : '11.2rem')};

  margin: 0.4rem;

  background-image: url(${character});
  background-repeat: no-repeat;
  background-size: cover;

  transition: all 0.2s ease-in-out;
  background-color: red;
  border-radius: 50%;
`;

export const StyledSideBarItem = styled.div`
  padding-left: 0.6rem;
  width: 50vw;

  display: flex;
  align-items: center;
  font-size: 2rem;
`;
