// API & Library
import Styled from 'styled-components';

// Assets
import Example from './assets/images/Example.png';

export const Styled_Example = Styled.div`
  position: relative;
  height: 10px;
  width: 10px;

  background-image: url(${Example});
  background-repeat: no-repeat;
  background-size: cover;
`;
