// -- API & Library
import Styled, { keyframes } from 'styled-components';

export const Styled_ProfileBackground = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transform-style: preserve-3d;

  
  background-color: red;
  z-index: 900;

  & h2 {
    position: relative;
    height: 100%;
    width: 100%;

    text-align: center;
    line-height: 100vh;
    font-size: 10vw;
  }

  & .banner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;

    background-color: green;

    & .block {
      position: relative;
      height: 5vh;
      width: 5vw;
      background-color: yellow;
      animation: animate 2s ease-in-out forwards;
    }
  }
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
