// -- API & Library
import Styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const popUp = keyframes`
  0% {
    opacity: 0;
    scale: 0;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
`;

export const popOut = keyframes`
  0% {
    opacity: 1;
    scale: 1;
  }
  100% {
    opacity: 0;
    scale: 0;
  }
`;

export const Styled_SidebarOptionModalContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  height: 100vh;
  width: 100vw;

  display:flex;
  justify-content: center;
  align-items: center;
`;

export const Styled_SidebarOptionModalBackground = Styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  animation: ${fadeIn} 0.5s;
`;

export const Styled_SidebarOptionModal = Styled.div`
  height: 20rem;
  width: 20rem;
  padding: 1rem;

  cursor: default;
  animation: ${popUp} 0.2s;
  background-color: var(--color-main);
`;
