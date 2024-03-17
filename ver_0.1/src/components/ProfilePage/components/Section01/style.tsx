// -- API & Library
import Styled from 'styled-components';

export const Styled_Section = Styled.div`
  min-height: 100vh;
  width: 120%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--color-sub);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    background: linear-gradient(#f00, #f0f);
    clip-path: circle(30% at right 70%);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;
    width: 100%;
    background: linear-gradient(#2196f3, #e91e63);
    clip-path: circle(20% at 10% 10%);
  }
`;
