// -- API & Library
import Styled from 'styled-components';

export const Styled_ProfileSectionLabel = Styled.div`
  height: calc(var(--size-font-lg) + 1.5rem);
  width: calc(var(--size-font-lg) * 6);
  margin-right: 1rem;

  transform-style: preserve-3d;
  transform: rotateY(30deg) rotateX(10deg);

  & span {
      position: absolute;
    top: 0;
    left: 0;
    height: calc(var(--size-font-lg) + 1.5rem);
    width: calc(var(--size-font-lg) * 6);
    line-height: calc(var(--size-font-lg) + 1.5rem);

    text-align: center;
    transform-style: preserve-3d;

    background-color: green;
  } 
`;
