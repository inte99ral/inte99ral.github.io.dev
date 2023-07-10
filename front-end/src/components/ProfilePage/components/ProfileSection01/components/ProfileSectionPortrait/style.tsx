// -- API & Library
import Styled from 'styled-components';

// -- Assets
import DJ from './assets/PortraitDJ.png';
import Ringfit from './assets/PortraitRingfit.png';
import Suit from './assets/PortraitSuit.png';

export const Styled_ProfileSectionPortrait = Styled.div`
  position: absolute;
  bottom: 0;
  right: 10%;
  height: 90vh;
  width: calc(90vh * 0.9);
  /* background: red; */
`;

export const Styled_ProfileSectionPortraitDJ = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${DJ});
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
