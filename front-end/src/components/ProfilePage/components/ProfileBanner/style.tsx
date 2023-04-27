// -- API & Library
import Styled from 'styled-components';

// -- Assets
import Brush from './assets/images/brush.png';

export const Styled_ProfileBanner = Styled.div`
  height: 200%;
  width: 200%;

  background-color: green;
`;

export const Styled_ProfileBannerPhoto = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20rem;
  width: 40rem;

  background-color: red;
`;

export const Styled_ProfileBannerScreen = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 20rem;
  width: 40rem;

  mix-blend-mode: screen;

  background-image: url(${Brush});
  background-repeat: no-repeat;
  background-size: cover;
`;
