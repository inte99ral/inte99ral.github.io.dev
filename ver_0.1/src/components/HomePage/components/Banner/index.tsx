// -- API & Library
import React from 'react';

// -- Component
import { BannerLogo } from './components/BannerLogo';

// -- Style
import {
  Styled_Banner,
  Styled_BannerBG,
  Styled_BannerOuterHole,
  Styled_BannerInnerHole,
} from './style';

export const Banner = () => {
  return (
    <Styled_Banner className="banner outer">
      <Styled_BannerBG />
      <Styled_BannerOuterHole className="inner">
        <Styled_BannerInnerHole className="inner">
          <BannerLogo></BannerLogo>
        </Styled_BannerInnerHole>
      </Styled_BannerOuterHole>
    </Styled_Banner>
  );
};
