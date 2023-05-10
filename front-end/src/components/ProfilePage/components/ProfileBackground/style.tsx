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

export const animate2 = keyframes`
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(2);
  }
`;

export const Styled_ProfileBackground = Styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  transform-style: preserve-3d;
  perspective: 500px;

  & h2 {
    height: 100vh;
    text-align: center;
    line-height: 100vh;
  }

  & .test {
    height: 100px;
    width: 100px
    background-color: blue;
  }

  & .banner {
    position: absolute;
    top: 500px;
    left: 500px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    background-color: red;

    transform-style: preserve-3d;
    perspective: 500px;

    /* & .blocks {
      position: relative;
      height: 5vh;
      width: 5vw;
      background-color: gray;
      animation: ${animate} 2s ease-in-out forwards;
    } */
  }

  & .banner .blocks {
      position: relative;
      height: 5vh;
      width: 5vw;
      background-color: gray;
      animation: ${animate} 2s ease-in-out forwards;
    }
`;
