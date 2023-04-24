// -- API & Library
import Styled from 'styled-components';

// -- assets
import LogoBlack from './assets/images/LogoBlack.png';
import LogoWhite from './assets/images/LogoWhite.png';

export const Styled_Footer = Styled.div`
  height: 20rem;
  width: 100%;
  padding-left: 3.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  background-color: var(--color-main);
`;

export const Styled_FooterLogoLight = Styled.div`
  height: 3rem;
  width: 15rem;

  background-image: url(${LogoBlack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Styled_FooterLogoDark = Styled.div`
  height: 2rem;
  width: 10rem;

  background-image: url(${LogoWhite});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Styled_FooterLogoAnnotation = Styled.div`
  font-size: 1.2rem;
  font-family: Eurof;
`;
