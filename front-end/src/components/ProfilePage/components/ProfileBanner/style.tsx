// API & Library
import Styled from 'styled-components';

// Assets
// import Photo from './assets/images/Photo.png';
// import Photo from './assets/images/Personal.png';
import Photo from './assets/images/PersonalDJ.png';

export const Styled_ProfileBanner = Styled.div`
  width: 100%;
  height: 20rem;

  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* background: linear-gradient( -45deg, #506EC8, #E1C8FA, #F078C8); */
  background-color: #44546A;
`;

export const Styled_ProfileBannerPhoto = Styled.div`
  width: 12rem;
  height: 12rem;
  margin: 1rem;

  border-radius: 50%;
  border: 0.5rem solid #e4e5e7;

  background-image: url(${Photo});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileBannerTitle = Styled.div`
  font-family: CopperplateGothicBoldRegular;
  font-size: 1.5rem;
  color: #e4e5e7;
`;

export const Styled_ProfileBannerSubtitle = Styled.div`
  font-family: CopperplateGothicBoldRegular;
  font-size: 1rem;
  color: #333F50;
`;
