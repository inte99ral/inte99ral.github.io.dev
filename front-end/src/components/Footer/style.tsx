// -- API & Library
import Styled from 'styled-components';

// -- assets
import LogoBlack from './assets/images/LogoBlack.png';
import LogoWhite from './assets/images/LogoWhite.png';

export const Styled_Footer = Styled.div`
  height: 20rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  background-color: var(--color-main);
`;

export const Styled_Footer_LogoLight = Styled.div`
  height: 4rem;
  width: 20rem;

  background-image: url(${LogoBlack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Styled_Footer_LogoDark = Styled.div`
  height: 4rem;
  width: 20rem;

  background-image: url(${LogoWhite});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
