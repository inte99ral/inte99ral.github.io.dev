// API & Library
import Styled from 'styled-components';

// Asset
import test from 'assets/images/test.png';

export const Styled_ProfileBanner = Styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${test});
  background-repeat: no-repeat;
  background-size: cover;
`;
