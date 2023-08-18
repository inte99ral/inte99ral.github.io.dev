// API & Library
import Styled from 'styled-components';

// Asset
import BG from './asset/image/LowPolyPatternBG.jpg';

// Export
export const Styled_HomeBanner = Styled.div`
  min-height: 20rem;
  width: 120vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(-45deg, #f078c8, #e1c8fa, #506ec8);
  background-color: var(--color-main);
  z-index: 2500;
`;

export const Styled_HomeBannerBG = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;

  mix-blend-mode: screen;
  filter: contrast(1.2);
  opacity: 0.6;
`;

export const Styled_HomeBannerOuterHole = Styled.div`
  height: 16rem;
  width: 16rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  background-color: var(--color-main);
`;

export const Styled_HomeBannerInnerHole = Styled.div`
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  height: 14rem;
  width: 14rem;

  border-radius: 50%;

  background-color: var(--color-sub);
`;

export const Styled_HomeBannerLogo = Styled.div`
  height: 200px;
  width: 200px;

  background: red;
`;
