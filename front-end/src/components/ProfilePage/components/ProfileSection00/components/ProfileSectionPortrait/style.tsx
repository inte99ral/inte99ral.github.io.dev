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
  }
  50% {
    background-color: red;
  }
  100% {
  }
`;

// -- Exports
export const Styled_ProfileSectionPortrait = Styled.div`
  position: absolute;
  bottom: 0;
  left: 50vw;
  height: 90vh;
  width: calc(90vh * 0.9);

  transform-style: preserve-3d;
  animation: ${rollRight} 8s infinite;

  & div {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Styled_ProfileSectionPortraitAvatar = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Avatar});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileSectionPortraitDJ = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${DJ});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileSectionPortraitGame = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Game});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileSectionPortraitRingfit = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Ringfit});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileSectionPortraitSuit = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Suit});
  background-repeat: no-repeat;
  background-size: cover;
`;
