// -- API & Library
import Styled from 'styled-components';

// -- Assets
import DJ from './assets/PortraitDJ.png';
import Ringfit from './assets/PortraitRingfit.png';
import Suit from './assets/PortraitSuit.png';

export const Styled_ProfileSectionPortrait = Styled.div`
  height: 4rem;
  width: 4rem;
`;

export const Styled_ProfileSectionPortraitDJ = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${DJ});
`;

export const Styled_ProfileSectionPortraitRingfit = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Ringfit});
`;

export const Styled_ProfileSectionPortraitSuit = Styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${Suit});
`;
