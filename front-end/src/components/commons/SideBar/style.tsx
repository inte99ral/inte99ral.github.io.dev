// API & Library
import styled from 'styled-components';

// Asset
import character from 'assets/images/character.png';

export const StyledSideBarBackground = styled.div<{ isActive: boolean }>`
  position: fixed;
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.6rem' : '100vw')};
  transition: all 0.2s ease-in-out;

  background-color: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-blend-mode: overlay;
`;

export const StyledSideBar = styled.div<{ isActive: boolean }>`
  height: 100vh;
  width: ${({ isActive }) => (!isActive ? '3.2rem' : '12rem')};

  display: flex;
  flex-direction: column;

  overflow: hidden;

  transition: all 0.2s ease-in-out;
`;

/**
 * @description 프로필 사진
 */
export const StyledSideBarProfile = styled.div`
  position: relative;
  padding: 0.6rem;
`;

export const StyledSideBarProfilePhoto = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (!isActive ? '2rem' : '10.8rem')};
  width: ${({ isActive }) => (!isActive ? '2rem' : '10.8rem')};
  background-image: url(${character});
  background-repeat: no-repeat;
  background-size: cover;

  transition: all 0.2s ease-in-out;
  border-radius: 50%;
`;

/**
 * @description 가로 라인
 */
export const StyledSideBarLine = styled.div<{ isActive: boolean }>`
  height: ${({ isActive }) => (!isActive ? '0.1rem' : '2.4rem')};
  width: 100%;
  padding-top: 0.4rem;

  display: flex;
  justify-content: center;
  gap: 0.4rem;

  box-shadow: inset 4px 4px 10px -1px rgba(0, 0, 0, 0.25),
    inset -4px -4px 10px -1px rgba(255, 255, 255, 0.25);

  overflow: hidden;
  font-size: 2rem;

  transition: all 0.2s ease-in-out;
  border-radius: 1px;
  background-color: #fafafa;
`;

export const StyledSideBarItem = styled.div<{ isActive: boolean }>`
  position: relative;
  padding-left: 0.6rem;
  height: 3.2rem;
  width: 50vw;

  overflow: hidden;

  gap: 0.5rem;

  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const StyledSideBarBlank = styled.div`
  flex-grow: 1;
  background-color: #ffffff;
`;
