// API & Library
import React from 'react';

// Style
import {
  Styled_HomeBanner,
  Styled_HomeBannerBG,
  Styled_HomeBannerOuterHole,
  Styled_HomeBannerInnerHole,
} from './style';

export const HomeBanner = () => {
  return (
    <Styled_HomeBanner className="home-banner outer">
      <Styled_HomeBannerBG />
      <Styled_HomeBannerOuterHole className="inner">
        <Styled_HomeBannerInnerHole className="inner" />
      </Styled_HomeBannerOuterHole>
    </Styled_HomeBanner>
  );
};
