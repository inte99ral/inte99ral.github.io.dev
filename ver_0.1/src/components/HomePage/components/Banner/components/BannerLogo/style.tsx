// API & Library
import Styled from 'styled-components';

// Asset
import BG from './assets/image/LowPolyPatternBG.jpg';

// Export
export const Styled_BannerLogo = Styled.div`
  height: 10rem;
  width: 10rem;
  font-size: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: green;
  border-radius: 30%;

  & * {
    color: white;
    // background: red;
    border-radius: 30%;
    mix-blend-mode:screen;
  }
`;
