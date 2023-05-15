// -- API & Library
import Styled, { keyframes } from 'styled-components';

export const animate = keyframes`
  0% {
    transform: translateZ(0px) rotate( 20deg );
  }
  50% {
    transform: translateZ(5px) rotate( 20deg );
    box-shadow: 0 0 40px rgba(0,0,0,0.5);
  }
  100% {
    transform: translateZ(0px) rotate( 20deg );
  }
`;

export const Styled_ProfileBackground = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;

  & .banner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    background-color: var(--color-sub);

    transform-style: preserve-3d;
    perspective: 500px;

    & .blocks {
      position: relative;
      height: 200vh;
      min-width: 10%;
      background-color: var(--color-sub);
      animation: ${animate} 5s linear infinite;
      transition: background-image 0.2s ease-in-out;
    }
  }
`;
