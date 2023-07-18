// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSectionLabel = Styled.div`
  height: calc(var(--size-font-lg) + 1.5rem);
  width: calc(var(--size-font-lg) * 6);
  margin-right: 1rem;

  transform-style: preserve-3d;
  transform: rotateY(30deg) rotateX(10deg);

  &:before {
    content: '';
    position: absolute;
    height: 100%;
    aspect-ratio: 1;

    /* transform: rotateY(90deg) translateZ(calc((var(--size-font-lg) + 1.5rem) / 2)); */

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
    backface-visibility: hidden;
    background: linear-gradient(-30deg, #f4f5f740 0%, #f4f5f700 70%);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  } 
`;
