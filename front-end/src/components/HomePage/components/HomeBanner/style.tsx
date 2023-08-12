// API & Library
import Styled from 'styled-components';

// Asset
import BG from './asset/image/LW001.jpg';

// Export
export const Styled_HomeBanner = Styled.div`
  min-height: 20rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background: linear-gradient(-45deg, #f078c8, #e1c8fa, #506ec8); */
  background-color: var(--color-main);
  z-index: 2500;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
