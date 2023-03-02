// -- API & Library
import Styled from 'styled-components';

// -- assets
import LogoBlack from './assets/images/LogoBlack.png';
import LogoWhite from './assets/images/LogoWhite.png';

export const Styled_Footer = Styled.div`
  height: 20rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  background-color: var(--color-main);
`;

export const Styled_Footer_LogoLight = Styled.div`
  height: 10rem;
  width: 10rem;

  background-color: purple;
`;

export const Styled_Footer_LogoDark = Styled.div`
  height: 10rem;
  width: 10rem;
  background-color: yellow;
`;
