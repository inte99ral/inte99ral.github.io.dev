// API & Library
import Styled from 'styled-components';

// Asset
import Banner from './assets/images/Banner.png';

export const Styled_BlogBanner = Styled.div`
  height: 20rem;
  width: 100%;

  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${Banner});
  background-repeat: no-repeat;
  background-size: cover;
`;
