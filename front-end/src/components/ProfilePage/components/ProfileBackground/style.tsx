// -- API & Library
import Styled, { keyframes } from 'styled-components';

export const animate = keyframes`
  0% {
    transform: translateZ(2000px);
  }
  100% {
    transform: translateZ(0px);
  }
`;

export const Styled_ProfileBackground = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
