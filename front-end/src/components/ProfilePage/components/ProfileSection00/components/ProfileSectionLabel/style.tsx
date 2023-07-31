// -- API & Library
import Styled, { keyframes } from 'styled-components';

// -- Init
const rollUp = keyframes`
  0% {
    transform: rotateY(30deg) rotateX(10deg);
  }
  25% {
    transform: rotateY(30deg) rotateX(100deg);
  }
  50% {
    transform: rotateY(30deg) rotateX(190deg);
  }
  75% {
    transform: rotateY(30deg) rotateX(280deg);
  }
  100% {
    transform: rotateY(30deg) rotateX(370deg);
  }
`;

// -- Exports
export const Styled_ProfileSectionLabel = Styled.div`
  height: calc(var(--size-font-lg) + 1.5rem);
  width: calc(var(--size-font-lg) * 6);
  margin-right: 1rem;

  transform-style: preserve-3d;
  transform: rotateY(30deg) rotateX(10deg);
  animation: ${rollUp} 8s infinite;
  /* -webkit-animation: ${rollUp} 5.5s infinite;
  -moz-animation: ${rollUp} 0.5s infinite;
  -o-animation: ${rollUp} 0.5s infinite; */
  /* transform: rotateY(30deg) rotateX(10deg);
  transition: 0.5s ease-in-out;

  &:hover {
    transform: rotateY(30deg) rotateX(100deg);
  } */


  &::before {
    content: '';
    position: absolute;
    height: 100%;
    aspect-ratio: 1;

    transform: rotateY(90deg) translateZ(calc((0px - var(--size-font-lg) - 1.5rem) / 2));
    background: radial-gradient(#f4f5f700 30%, #f4f5f720 100%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: calc(var(--size-font-lg) + 1.5rem);
    width: calc(var(--size-font-lg) * 6);
    line-height: calc(var(--size-font-lg) + 1.5rem);

    text-align: center;
    transform-style: preserve-3d;
    transform: rotateX(calc(90deg * var(--deg))) translateZ(calc((var(--size-font-lg) + 1.5rem) / 2));
    /* backface-visibility: hidden; */
    background: linear-gradient(-30deg, #f4f5f720 0%, #f4f5f700 70%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  } 
`;
