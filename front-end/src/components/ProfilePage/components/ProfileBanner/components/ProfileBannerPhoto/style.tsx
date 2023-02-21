// -- API & Library
import Styled from 'styled-components';

// -- Assets
import Personal from './assets/images/Personal.png';
import PersonalDJ from './assets/images/PersonalDJ.png';

export const Styled_ProfileBannerPhoto = Styled.div`
  height: 100%;
  width: 100%;

  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Styled_ProfileBannerPhoto1 = Styled.div`
  height: 12rem;
  width: 12rem;
  
  background-image: url(${Personal});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileBannerPhoto2 = Styled.div`
  height: 12rem;
  width: 12rem;

  background-image: url(${Personal});
  background-repeat: no-repeat;
  background-size: cover;
`;
