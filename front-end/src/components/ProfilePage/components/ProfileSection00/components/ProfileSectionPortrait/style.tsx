// -- API & Library
import Styled, { keyframes } from 'styled-components';

// -- Assets
import Avatar from './assets/PortraitAvatar.png';
import DJ from './assets/PortraitDJ.png';
import Game from './assets/PortraitGame.png';
import Ringfit from './assets/PortraitRingfit.png';
import Suit from './assets/PortraitSuit.png';

// -- Init
const rollRight = keyframes`
  0% {
    transform: rotateX(10deg) rotateY(5deg);
  }
  25% {
    transform: rotateX(10deg) rotateY(95deg);
  }
  50% {
    transform: rotateX(10deg) rotateY(185deg);
  }
  75% {
    transform: rotateX(10deg) rotateY(275deg);
  }
  100% {
    transform: rotateX(10deg) rotateY(365deg);
  }
`;

// -- Exports
export const Styled_ProfileSectionPortrait = Styled.div`
  position: absolute;
  bottom: -8vh;
  left: 50vw;
  height: 90vh;
  width: 81vh;

  transform-style: preserve-3d;
  animation: ${rollRight} 8s infinite;

  & div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(#f4f5f700 50%, #f4f5f750 100%);
    backdrop-filter: blur(10px);
    /* backface-visibility: hidden; */

    transform-style: preserve-3d;
    transform: rotateY(calc(90deg * var(--deg))) translateZ(40.5vh);
  }
`;

export const Styled_ProfileSectionPortraitAvatar = Styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${Avatar});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Styled_ProfileSectionPortraitDJ = Styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${DJ});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Styled_ProfileSectionPortraitGame = Styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${Game});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Styled_ProfileSectionPortraitRingfit = Styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${Ringfit});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Styled_ProfileSectionPortraitSuit = Styled.div`
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
