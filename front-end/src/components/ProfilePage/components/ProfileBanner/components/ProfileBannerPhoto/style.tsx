// -- API & Library
import Styled from 'styled-components';

// -- Assets
import Personal from './assets/images/Personal.png';
import PersonalDJ from './assets/images/PersonalDJ.png';

export const Styled_ProfileBannerPhoto = Styled.div`
  width: 100%;
  height: 20rem;

  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #44546A;
`;

export const Styled_ProfileBannerPhoto1 = Styled.div`
  background-image: url(${Personal});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Styled_ProfileBannerPhoto2 = Styled.div`
  background-image: url(${Personal});
  background-repeat: no-repeat;
  background-size: cover;
`;
