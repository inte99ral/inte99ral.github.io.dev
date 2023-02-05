// API & Library
import Styled from 'styled-components';

// Assets
import Photo from './assets/images/Photo.png';

export const Styled_ProfileBanner = Styled.div`
  width: 100%;
  height: 20rem;

  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient( -45deg, #506EC8, #E1C8FA, #F078C8);
`;

export const Styled_ProfileBannerPhoto = Styled.div`
  width: 10px;
  height: 10px;

  background-image: url(${Photo});
  background-repeat: no-repeat;
  background-size: cover;
`;
