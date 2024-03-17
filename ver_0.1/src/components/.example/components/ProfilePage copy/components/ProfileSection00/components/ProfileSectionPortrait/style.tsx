// -- API & Library
import Styled, { keyframes } from 'styled-components';

// -- Asset
import Suit from './assets/PortraitSuit.png';

// -- Export
export const Styled_ProfileSectionPortrait = Styled.div`
  position: absolute;
  bottom: 0;
  left: 0vw;
  height: 90vh;
  width: 81vh;
`;

export const Styled_ProfileSectionPortraitSuit = Styled.div`
  position: absolute;
  top: 0;
  left: 60vw;
  height: 100%;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${Suit});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
